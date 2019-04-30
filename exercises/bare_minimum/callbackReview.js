/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // create a promise with the new Promise constructor
  const getFirstLinePromise = new Promise((resolve, reject) => {
    // do something async, then 
    fs.readFile(filePath, function (err, fileData) {
      if (err) {
        reject(err);
        callback(err);
      } else {
        var firstLine = fileData.toString().substring(0, fileData.indexOf('\n'));
        resolve(firstLine);
        callback(err, firstLine);
      }
    });
  });

  return getFirstLinePromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  const statusCodePromise = new Promise((resolve, reject) => {
    request(url, function(err, res, body) {
      if (err) {
        reject(err);
        callback(err);
      } else {
        resolve(res.statusCode);
        callback(err, res.statusCode);
      }
    });
  });

  return statusCodePromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
