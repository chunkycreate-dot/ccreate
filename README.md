# ChunkyCreate
Dev: `npm install && npm run dev`   Build: `npm run build` (output: `dist`)
Products: edit ONLY `src/data/products.ts`. Cover images go in `public/products/`.
Backend (later): `functions/api/*` = Cloudflare Pages Functions. Secrets (Razorpay, R2) go in Pages > Settings > Environment variables. Never commit PDFs.
Deploy: Cloudflare Pages > connect GitHub repo > Build command `npm run build` > Output dir `dist`.

## Payments & downloads (Cloudflare Pages > Settings)
Environment variables: `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` (encrypt), `DOWNLOAD_SECRET` (any long random string).
R2 binding: variable name `PDF_BUCKET` -> your PRIVATE bucket holding the PDF. `downloadUrl` in products.ts = the file name in that bucket.
