# The Clover Print — Thought of the Day

A lightweight static website with a curated random thought library, animated gradient quote card, copy/share actions, and links to The Clover Print Shopify store. Built for Cloudflare Pages free hosting. It does **not** modify or embed into the Shopify theme.

## Included

- `index.html` — page structure and metadata
- `styles.css` — responsive animated gradient design
- `app.js` — curated quote library and random selection
- `config.js` — Shopify store URL setting
- `favicon.svg` — small clover-inspired icon
- `_headers` — basic security headers
- `robots.txt` — search crawler instructions
- `generate_qr.py` — optional QR code generator

## 1. Set your store URL

Open `config.js` and verify this value:

```js
STORE_URL: "https://thecloverprint.com/"
```

Change it if your actual Shopify storefront uses a different canonical URL. The store links open in a new tab.

## 2. Preview locally

The page can be opened by double-clicking `index.html`. For a more realistic local preview, run a static server from this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`. Clipboard and share functions generally work best on HTTPS or localhost.

## 3. Deploy to Cloudflare Pages (free static hosting)

### Option A — Direct Upload

1. Sign in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Open **Workers & Pages** (the wording may vary slightly).
3. Create a Pages project and choose **Direct Upload** if offered.
4. Upload the *contents* of this folder, not a parent folder that nests the files one level too deep. `index.html` must be at the published root.
5. Name the project, for example `clover-thoughts`.
6. Deploy. Cloudflare will give you a URL such as `clover-thoughts.pages.dev`.
7. Open that URL and test the page, random thought button, copy and share actions.

Direct Upload projects have workflow limitations compared with Git-connected projects; choose Git integration if you want every Git push to deploy automatically. Check Cloudflare's current dashboard options and documentation before deployment.

### Option B — Git integration

1. Create a GitHub repository and upload these files to its root.
2. In Cloudflare Dashboard, create a Pages project and connect that repository.
3. For a plain static site, no framework is needed. Leave the build command blank if the UI permits it; otherwise follow the current Cloudflare instructions for a static site with no build step.
4. Set the output directory to the repository root (often `.` for a root-level static site).
5. Deploy.

Official docs: https://developers.cloudflare.com/pages/

## 4. Connect `thoughts.thecloverprint.com`

Do this after the first successful Pages deployment:

1. Open your Pages project in Cloudflare.
2. Go to **Custom domains** and choose **Set up a custom domain**.
3. Enter `thoughts.thecloverprint.com`.
4. Follow the wizard. Because the main domain is already managed by Cloudflare, the wizard can guide the DNS setup.
5. Wait until Cloudflare shows the custom domain as active and HTTPS is ready.
6. Test `https://thoughts.thecloverprint.com` on a phone using mobile data as well as Wi-Fi.

Important:
- Add the hostname inside the Pages project's **Custom domains** area. Do not rely on creating a CNAME record alone.
- Do not change or delete DNS records used by the Shopify root domain or `www` hostname.
- If Cloudflare shows a conflicting `thoughts` DNS record, inspect it carefully before changing it. It should point to the Pages project hostname after setup.
- Keep Shopify's existing domain connection untouched. The thoughts subdomain is a separate hostname.

Official guide: https://developers.cloudflare.com/pages/configuration/custom-domains/

## 5. Create the permanent QR code

The QR destination should be:

`https://thoughts.thecloverprint.com/`

First confirm that URL works on a phone and shows HTTPS. Then generate a high-resolution QR:

```bash
python -m pip install "qrcode[pil]"
python generate_qr.py
```

This creates `thoughts-qr.png` and `thoughts-qr.svg` in the current folder. Print the QR with a quiet white margin around it. Keep it dark-on-light for reliable scanning; avoid putting a logo over the QR modules. Test a physical print with multiple phones before ordering packaging.

The QR is static and points to your own domain. You can change the page's design and quote library later without reprinting it, as long as you keep the same domain and path.

## 6. Update the thought library

Edit the `thoughts` array near the top of `app.js`. Each item has three fields:

```js
{
  category: "PERSPECTIVE",
  text: "Your thought goes here.",
  note: "A short supporting line goes here."
}
```

Use original or properly licensed wording for commercial use. The included entries are short original-style inspirational lines; still review the collection before commercial publication. No third-party quote API is used.

The page chooses a random item on every full page load and the “Give me another thought” button. It avoids showing the same item twice consecutively during the current page session. With a finite curated library, thoughts eventually repeat.

## 7. Before printing

- [ ] Custom domain opens over HTTPS
- [ ] Random thought changes after refresh
- [ ] “Give me another thought” works
- [ ] Copy/share controls tested on mobile
- [ ] Shopify links open the correct store
- [ ] QR scans from a printed proof
- [ ] Keep a backup of this folder

## Privacy and costs

This is a static site: no customer login, database, analytics, or quote API is included. Cloudflare Pages has a free plan, but product limits and plan terms can change; review the current Cloudflare pricing/limits. Google Fonts is loaded from Google when internet access is available; system fallback fonts work if it cannot load.
