var fs = require('fs')

function throwError (err) {
  if (err) {
    throw err
  }
}

/**
 * Write content to file in utf8 encoding
 *
 * @param {String} filePath
 * @param {String} content
 */

function writeFileUtf8 (filePath, content) {
  fs.writeFile(filePath, content, 'utf8', throwError)
}

module.exports = writeFileUtf8
