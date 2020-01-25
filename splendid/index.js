/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[MNP](https://splendid.devjs.org)',
    },
  ],
  pages: '../pages',
  elements: ['elements', '../help/elements'],
  blocks: ['blocks', '../help/blocks'],
  // which prefixes to keep in the main CSS
  prefixes: ['-webkit-hyphens', '-ms-hyphens'],
  // for sitemap and social-buttons
  url: 'https://splendid.dev',
  // required when pages are at org.github.io/pages-name
  /* mount: '/', */
  potracePath: '~/.splendid/potrace',
}

export default config