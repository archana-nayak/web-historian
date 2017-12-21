var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

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
  }
  if (archive.isUrlArchived(asset, callback)) {

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


// As you progress, keep thinking about what helper functions you can put here!


// Write some code here that helps serve up your static files!
// (Static files are things like html (yours or archived from others...),
// css, or anything that doesn't change often.)
