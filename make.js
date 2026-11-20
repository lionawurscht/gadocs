// The link for a patient: the form's fields through the codec into the
// fragment of the release page's address.
"use strict";

(() => {
  const $ = (id) => document.getElementById(id);
  const FIELDS = ["caseNo", "name", "dob", "recipient", "lang", "treatment", "location"];

  const showV2 = () => {
    for (const el of document.querySelectorAll(".v2f")) el.hidden = $("mrf").value !== "02";
  };
  $("mrf").addEventListener("change", showV2);
  showV2();

  $("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(FIELDS.map((k) => [k, $(k).value]));
    const url = new URL("./", location.href);
    // ?mrf-version=02 picks the reworked form; no parameter is version 01
    if ($("mrf").value !== "01") url.searchParams.set("mrf-version", $("mrf").value);
    url.hash = "data=" + (await Codec.encode(fields));
    $("link").value = url.href;
    $("open").href = url.href;
    $("out").hidden = false;
    $("copied").hidden = true;
  });

  $("copy").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("link").value);
    $("copied").hidden = false;
  });
})();
