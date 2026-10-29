// The link for a patient: the form's fields through the codec into the
// fragment of the release page's address.
"use strict";

(() => {
  const $ = (id) => document.getElementById(id);
  const FIELDS = ["caseNo", "name", "dob", "recipient", "lang"];

  $("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(FIELDS.map((k) => [k, $(k).value]));
    const url = new URL("./", location.href);
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
