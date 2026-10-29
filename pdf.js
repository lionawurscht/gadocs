// The PDF, built in the browser with pdfmake (vendor/, loaded on first use):
// German left, English right, the signature and the signing time below.
"use strict";

const Pdf = (() => {
  let loading = null;

  function script(src) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.src = src;
      el.onload = resolve;
      el.onerror = () => reject(new Error("could not load " + src));
      document.head.appendChild(el);
    });
  }

  function load() {
    loading ??= script("vendor/pdfmake.min.js").then(() => script("vendor/vfs_fonts.js"));
    return loading;
  }

  async function dataUrl(src) {
    const blob = await (await fetch(src)).blob();
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
  }

  const pad2 = (n) => String(n).padStart(2, "0");

  function day(d) {
    return `${pad2(d.getDate())}.${pad2(d.getMonth() + 1)}.${d.getFullYear()}`;
  }

  function stamp(d) {
    const off = -d.getTimezoneOffset();
    const sign = off >= 0 ? "+" : "-";
    const zone = `UTC${sign}${pad2(Math.floor(Math.abs(off) / 60))}:${pad2(Math.abs(off) % 60)}`;
    return `${day(d)} ${pad2(d.getHours())}:${pad2(d.getMinutes())} (${zone})`;
  }

  function box(checked) {
    const shapes = [{ type: "rect", x: 0, y: 1, w: 9, h: 9, lineWidth: 0.8 }];
    if (checked) {
      shapes.push(
        { type: "line", x1: 1.8, y1: 5.6, x2: 4, y2: 8, lineWidth: 1.4 },
        { type: "line", x1: 4, y1: 8, x2: 8, y2: 2.6, lineWidth: 1.4 },
      );
    }
    return { canvas: shapes, width: 14 };
  }

  const both = (fn, opts = {}) => [
    { ...opts, ...fn(TEXTS.de) },
    { ...opts, ...fn(TEXTS.en) },
  ];

  function pair(fn, opts) {
    return { columns: both(fn, opts), columnGap: 18, margin: [0, 0, 0, 6] };
  }

  function check(checked, key) {
    return pair((t) => ({ columns: [box(checked), { text: t[key] }] }));
  }

  // a section's heading and text on one page
  function section(head, ...body) {
    return { unbreakable: true, stack: [pair((t) => ({ text: t[head] }), { style: "head" }), ...body] };
  }

  function line(content, label, width) {
    return {
      width,
      stack: [
        content,
        { canvas: [{ type: "line", x1: 0, y1: 2, x2: width, y2: 2, lineWidth: 0.6 }] },
        { text: label, style: "label", margin: [0, 2, 0, 0] },
      ],
    };
  }

  async function build(data) {
    await load();
    const logo = await dataUrl("logo.jpg");
    const values = { name: data.name, recipient: data.recipient };
    const rep = data.rep;
    const sig = data.signature;
    const when = new Date();
    const fact = (key, value) => [
      { text: `${TEXTS.de[key]} / ${TEXTS.en[key]}`, style: "label" },
      { text: value || "", bold: true },
    ];

    const content = [
      { image: logo, width: 150, alignment: "center", margin: [0, 0, 0, 10] },
      { text: `${TEXTS.de.docTitle} / ${TEXTS.en.docTitle}`, style: "title" },
      { columns: both((t) => ({ text: t.title, alignment: "center" })), columnGap: 18, style: "subtitle" },
      {
        table: {
          widths: [120, "*"],
          body: [
            fact("to", data.recipient),
            fact("patient", data.name),
            fact("dob", data.dob),
            fact("caseNo", data.caseNo),
          ],
        },
        layout: "noBorders",
        margin: [0, 6, 0, 12],
      },

      section("s1", pair((t) => ({ text: fill(t.s1Text, values) }))),
      section(
        "s2",
        pair((t) => ({ text: t.s2Text })),
        check(data.record, "record"),
        pair((t) => ({ text: t.form })),
        check(data.electronic, "electronic"),
        check(data.hardCopy, "hardCopy"),
      ),
      section(
        "s3",
        pair((t) => ({ text: t.s3Text })),
        pair((t) => ({
          text: [
            `${t.s3Name}: ${COMPANY.name}\n`,
            `${t.s3Org}: ${COMPANY.organisation}\n`,
            `${t.s3Address}: ${COMPANY.address}`,
          ],
          bold: true,
        })),
        pair((t) => ({ text: t.s3Note })),
      ),
      section("s4", pair((t) => ({ text: t.s4Text }))),
    ];

    if (rep) {
      content.push(
        pair((t) => ({ text: t.repIntro }), { margin: [0, 8, 0, 6] }),
        {
          table: {
            widths: [200, "*"],
            body: [
              fact("repName", rep.name),
              [
                { text: `${TEXTS.de.repAuthority} / ${TEXTS.en.repAuthority}`, style: "label" },
                {
                  text: [
                    `${TEXTS.de.authorities[rep.kind]} / ${TEXTS.en.authorities[rep.kind]}`,
                    rep.detail ? `\n${rep.detail}` : "",
                  ],
                  bold: true,
                },
              ],
            ],
          },
          layout: "noBorders",
          margin: [0, 0, 0, 6],
        },
      );
    }

    const sigLabel = rep
      ? `${TEXTS.de.repSignature} / ${TEXTS.en.repSignature}`
      : `${TEXTS.de.signature} / ${TEXTS.en.signature}`;
    const signer = rep ? rep.name : data.name;
    content.push({
      unbreakable: true,
      margin: [0, 16, 0, 0],
      stack: [
        {
          columns: [
            line({ image: sig.url, fit: [240, 70] }, `${sigLabel}\n${signer}`, 300),
            { width: "*", text: "" },
            line({ text: day(when), fontSize: 12, margin: [0, 50, 0, 2] }, `${TEXTS.de.date} / ${TEXTS.en.date}`, 140),
          ],
        },
        {
          text: `${fill(TEXTS.de.signedAt, { when: stamp(when) })} / ${fill(TEXTS.en.signedAt, { when: stamp(when) })}`,
          style: "label",
          margin: [0, 8, 0, 0],
        },
      ],
    });

    content.push(
      pair((t) => ({ text: t.confidentiality }), { style: "small", margin: [0, 24, 0, 0] }),
    );

    const doc = {
      pageSize: "A4",
      pageMargins: [40, 36, 40, 40],
      info: {
        title: `${data.caseNo} - ${data.name} medical release form`,
        author: signer,
        subject: "Schweigepflichtsentbindung / Medical Release",
        creator: "Goral Assistance",
      },
      content,
      footer: (page, pages) => ({
        columns: [
          { text: `${TEXTS.de.caseNo} / ${TEXTS.en.caseNo} ${data.caseNo}` },
          { text: `${TEXTS.de.page} / ${TEXTS.en.page} ${page}/${pages}`, alignment: "right" },
        ],
        style: "label",
        margin: [40, 12, 40, 0],
      }),
      defaultStyle: { font: "Roboto", fontSize: 9.5, lineHeight: 1.2 },
      styles: {
        title: { fontSize: 16, bold: true, alignment: "center", color: "#1d2a35" },
        subtitle: { fontSize: 10, color: "#444", margin: [0, 2, 0, 4] },
        head: { bold: true, fontSize: 10.5, color: "#1d2a35", margin: [0, 8, 0, 3] },
        label: { fontSize: 8, color: "#555" },
        small: { fontSize: 7, color: "#555" },
      },
    };

    const pdf = pdfMake.createPdf(doc);
    return new Promise((resolve) => pdf.getBlob(resolve));
  }

  function fileName(data) {
    const safe = (s) => s.replace(/[\\/:*?"<>|]+/g, " ").replace(/\s+/g, " ").trim();
    return safe(`${data.caseNo} - ${data.name} medical release form`) + ".pdf";
  }

  return { build, fileName, day, load };
})();
