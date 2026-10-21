SPECIALIST SUPPORTED HOUSING — MULTI-PAGE STATIC WEBSITE

This build contains real page files, not just one HTML file with client-side routes.

Pages:
- index.html
- about/index.html
- why-ssh/index.html
- investment-process/index.html
- calculator/index.html
- properties/index.html
- articles/index.html
- faq/index.html
- contact/index.html

Shared assets:
- assets/site.css
- assets/site.js
- assets/image-*.png

Deployment:
1. Upload the CONTENTS of this folder to the root of your GitHub repository.
2. Ensure vercel.json is at the repository root alongside index.html.
3. Redeploy the project in Vercel.
4. Visit /about/, /calculator/, etc. The pages are actual directories with index.html files.

Note:
The Articles and FAQ sections are currently placeholders/links and need the existing Sanity Studio integration merged back into this build to preserve live CMS content.
The contact form opens the visitor's email app and is not automatic CRM lead capture yet.
