// The link's payload: the case fields as JSON, deflated, base64url, behind a
// version letter. It keeps the link short and unreadable at a glance; it is
// no protection, the code is public. The data travels in the fragment
// (#data=...), which the browser never sends to the server.
"use strict";

const Codec = (() => {
  const VERSION = "1";
  // short keys in the link, readable names in the app
  const KEYS = { c: "caseNo", n: "name", d: "dob", r: "recipient", l: "lang" };

  function toB64u(bytes) {
    let bin = "";
    for (const b of bytes) bin += String.fromCharCode(b);
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function fromB64u(text) {
    const b64 = text.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b64 + "===".slice((b64.length + 3) % 4));
    return Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
  }

  async function pipe(bytes, stream) {
    const out = new Blob([bytes]).stream().pipeThrough(stream);
    return new Uint8Array(await new Response(out).arrayBuffer());
  }

  async function encode(fields) {
    const short = {};
    for (const [k, name] of Object.entries(KEYS)) {
      const v = (fields[name] || "").trim();
      if (v) short[k] = v;
    }
    const json = new TextEncoder().encode(JSON.stringify(short));
    return VERSION + toB64u(await pipe(json, new CompressionStream("deflate-raw")));
  }

  async function decode(payload) {
    if (!payload || payload[0] !== VERSION) throw new Error("unknown link version");
    const json = await pipe(fromB64u(payload.slice(1)), new DecompressionStream("deflate-raw"));
    const short = JSON.parse(new TextDecoder().decode(json));
    const fields = {};
    for (const [k, name] of Object.entries(KEYS)) fields[name] = String(short[k] || "");
    return fields;
  }

  // #data=<payload> from a location hash
  function fromHash(hash) {
    const params = new URLSearchParams(hash.replace(/^#/, ""));
    return params.get("data");
  }

  return { encode, decode, fromHash };
})();
