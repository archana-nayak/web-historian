var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelpers = require('./http-helpers');

exports.handleRequest = function (req, res) {
  var {url, method} = req;
  console.log('url method ', url, method);
  httpHelpers.serveAssets(res, url, sendResponse);
  // res.end(archive.paths.list);
};

var sendResponse = function(res, content) {
  // console.log('in sendResponse res ', res);
  res.end(content);
}

// 
// if (req.method === 'GET') {
//
// }
