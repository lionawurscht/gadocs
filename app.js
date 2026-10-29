// The page: the case from the link, the language, the ticks, the
// representative, the signature, then the PDF to share or download.
// Nothing is stored or sent; closing the tab forgets everything.
"use strict";

(() => {
  const $ = (id) => document.getElementById(id);
  const state = { lang: "de", data: null, signature: null, pdfUrl: null };

  function t(key) {
    return key.split(".").reduce((o, k) => (o ? o[k] : undefined), TEXTS[state.lang]) ?? key;
  }

  function render() {
    document.documentElement.lang = state.lang;
    for (const el of document.querySelectorAll("[data-t]")) el.textContent = t(el.dataset.t);
    for (const el of document.querySelectorAll("[data-ph]")) el.placeholder = t(el.dataset.ph);
    for (const b of document.querySelectorAll("[data-lang]")) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
    }
    document.title = `Goral Assistance – ${t("docTitle")}`;
    if (state.data) {
      $("s1-text").textContent = fill(t("s1Text"), state.data);
      $("sig-label").textContent = $("c-rep").checked ? t("repSignature") : t("signature");
      $("b-sign").textContent = state.signature ? t("signAgain") : t("sign");
    }
  }

  function say(text) {
    $("msg").textContent = text || "";
    $("msg").hidden = !text;
  }

  function fail(key) {
    $("app").hidden = true;
    $("fail").hidden = false;
    $("fail-msg").dataset.t = key;
    render();
  }

  // a changed form makes the PDF stale
  function stale() {
    $("done").hidden = true;
    if (state.pdfUrl) URL.revokeObjectURL(state.pdfUrl);
    state.pdfUrl = null;
    say("");
  }

  // --- signature pad
  const pad = new SignaturePad($("pad-canvas"));

  function openPad() {
    $("pad").hidden = false;
    document.body.classList.add("padopen");
    pad.clear();
    requestAnimationFrame(() => pad.fit());
  }

  function closePad() {
    $("pad").hidden = true;
    document.body.classList.remove("padopen");
  }

  $("b-sign").addEventListener("click", openPad);
  $("sig-box").addEventListener("click", openPad);
  $("p-cancel").addEventListener("click", closePad);
  $("p-clear").addEventListener("click", () => pad.clear());
  $("p-ok").addEventListener("click", () => {
    if (pad.empty) return;
    state.signature = pad.toDataURL();
    $("sig-img").src = state.signature.url;
    $("sig-img").hidden = false;
    $("sig-empty").hidden = true;
    closePad();
    stale();
    render();
  });

  // --- the form
  $("c-rep").addEventListener("change", () => {
    $("rep").hidden = !$("c-rep").checked;
    render();
  });
  for (const el of document.querySelectorAll("#app input, #app select, #app textarea")) {
    el.addEventListener("input", stale);
    el.addEventListener("change", stale);
  }
  for (const b of document.querySelectorAll("[data-lang]")) {
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang;
      render();
    });
  }

  function collect() {
    const rep = $("c-rep").checked
      ? { name: $("rep-name").value.trim(), kind: $("rep-kind").value, detail: $("rep-detail").value.trim() }
      : null;
    return {
      ...state.data,
      record: $("c-record").checked,
      electronic: $("c-electronic").checked,
      hardCopy: $("c-hardcopy").checked,
      rep,
      signature: state.signature,
    };
  }

  function problem(f) {
    if (!f.record) return "needRecord";
    if (!f.electronic && !f.hardCopy) return "needForm";
    if (f.rep && !f.rep.name) return "needRepName";
    if (f.rep && f.rep.kind === "other" && !f.rep.detail) return "needAuthority";
    if (!f.signature) return "needSignature";
    return null;
  }

  $("b-pdf").addEventListener("click", async () => {
    stale();
    const f = collect();
    const p = problem(f);
    if (p) {
      say(t(p));
      return;
    }
    const button = $("b-pdf");
    button.disabled = true;
    try {
      const blob = await Pdf.build(f);
      const name = Pdf.fileName(f);
      state.pdfUrl = URL.createObjectURL(blob);
      $("b-download").href = state.pdfUrl;
      $("b-download").download = name;
      $("b-view").href = state.pdfUrl;
      const file = new File([blob], name, { type: "application/pdf" });
      const share = $("b-share");
      share.hidden = !(navigator.canShare && navigator.canShare({ files: [file] }));
      share.onclick = () => navigator.share({ files: [file], title: name }).catch(() => {});
      $("done").hidden = false;
      $("done").scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (err) {
      say(`${t("pdfFailed")} ${err.message || err}`);
    } finally {
      button.disabled = false;
    }
  });

  // --- start
  async function start() {
    const nav = (navigator.language || "").toLowerCase();
    state.lang = nav.startsWith("de") ? "de" : "en";
    render();
    if (typeof DecompressionStream === "undefined") return fail("oldBrowser");
    const payload = Codec.fromHash(location.hash);
    if (!payload) return fail("noData");
    try {
      state.data = await Codec.decode(payload);
    } catch {
      return fail("badLink");
    }
    if (!state.data.name || !state.data.caseNo) return fail("badLink");
    if (state.data.lang === "de" || state.data.lang === "en") state.lang = state.data.lang;

    $("f-recipient").textContent = state.data.recipient;
    $("f-name").textContent = state.data.name;
    $("f-dob").textContent = state.data.dob;
    $("f-case").textContent = state.data.caseNo;
    $("co-name").textContent = COMPANY.name;
    $("co-org").textContent = COMPANY.organisation;
    $("co-address").textContent = COMPANY.address;
    $("sig-date").textContent = Pdf.day(new Date());
    $("app").hidden = false;
    render();
    Pdf.load().catch(() => {}); // fetch pdfmake while the patient reads
  }

  window.addEventListener("hashchange", () => location.reload());
  start();
})();
