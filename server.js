var scrape = require('./index.js');

scrape({
  urls: ['http://url-to-scrap'],
  directory: './outputdirectory',
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'}
  ],
  recursive: true,
  maxRecursiveDepth: 2,
  maxDepth: 1
}).then(console.log).catch(console.log);

