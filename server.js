var scrape = require('./website-scraper/index.js');

scrape({
  urls: ['http://revistero.teatredefum.net'],
  directory: './lalenguadelasmaquinas',
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'}
  ],
  recursive: true,
  maxRecursiveDepth: 2,
  maxDepth: 1
}).then(console.log).catch(console.log);

