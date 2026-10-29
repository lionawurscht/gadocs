# Goral medical release

The patient's medical release (Schweigepflichtsentbindung) as a static page
for GitHub Pages. The patient opens a link, reads the form in German or
English, ticks, signs on the screen and gets a bilingual PDF to send back.

Nothing about a patient is in this repo or on the server. The case travels
in the link's fragment (`#data=...`), which browsers never send to the
server; the page reads it, and the PDF is built in the browser. Nothing is
stored: closing the tab forgets it.

## Making a link

Open `make.html` on the site, fill case file, name, date of birth and
recipient, Make link, Copy. The link is the site's address with
`#data=<payload>`.

The payload (`codec.js`): the fields as JSON with short keys (`c` case,
`n` name, `d` birth date, `r` recipient, `l` language `de`/`en`), deflated
(`deflate-raw`), base64url, behind the version letter `1`. Short and
unreadable at a glance; no protection, the code is public.

## Files

| File | What |
|---|---|
| `index.html`, `app.js` | the patient's page: the case from the link, language, ticks, representative, signature, PDF, share or download |
| `texts.js` | every text, German and English; the form follows the WebApp's `doc_release3.asp`; `COMPANY` |
| `codec.js` | the link's payload, both ways |
| `signature.js` | the full-screen signature pad (pointer events, cropped PNG at 3x) |
| `pdf.js` | the PDF with pdfmake: German left, English right, signature, date, signing time |
| `make.html`, `make.js` | the link generator |
| `vendor/` | pdfmake 0.2.20 and its Roboto fonts, served from here, not a CDN |
| `logo.png`, `icon.png` | the Goral mark |

## Defaults

Ticked: the complete health record and the electronic copy. Hard copy not.
A PDF needs the record ticked, one form of disclosure, a signature, and
with a representative their name (and a description for Other).

The PDF is named `<case> - <name> medical release form.pdf`.

## Trying it locally

```
python -m http.server 8790 --bind 127.0.0.1
```

then `http://127.0.0.1:8790/make.html`. `file://` does not work (the page
fetches its logo and pdfmake).

## Publishing

Push to GitHub, Settings, Pages, deploy from `main`, root. `.nojekyll` keeps
the files as they are; `robots.txt` and `noindex` keep it out of search.
