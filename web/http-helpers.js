const path = require('path');
const fs = require('fs');
const archive = require('../helpers/archive-helpers');
// const https = require('https');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  if( asset === '/' ) {
   asset = './web/public/index.html';
 } else if (!archive.isUrlArchived(asset, callback)) {
    createFile(asset);
  }
  fs.readFile(asset, function(error, content) {
    if (error) {
      res.writeHead(500, exports.headers);
      console.error(error);
      res.end();
    } else {
      res.writeHead(200, exports.headers);
      callback(res, content);
    }
  });

};
// archive.paths.archivedSites + 'sites/'
const createFile = (asset) => {
  var name = './archives/sites' + asset;
  var content = 'lol empty';
  fs.writeFile(name, content, function(err) {
    if (err) throw error;
    console.log('Saved!');
  });
};


// const makeRequestToSite = () => {
//   https
// };

// As you progress, keep thinking about what helper functions you can put here!


// Write some code here that helps serve up your static files!
// (Static files are things like html (yours or archived from others...),
// css, or anything that doesn't change often.)
