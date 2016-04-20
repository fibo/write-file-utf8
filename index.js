var fs = require('fs')
var staticProps = require('static-props')

var error = {}

staticProps(error)({
  contentIsNotString: 'write-file-utf8 / argument "content" is not a string'
})

function throwError (err) {
  if (err) {
    throw err
  }
}

/**
 * Write content to file using utf8 encoding
 *
 * @param {String} filePath
 * @param {String} content
 */

function writeFileUtf8 (filePath, content) {
  if (typeof content === 'string') {
    fs.writeFile(filePath, content, 'utf8', throwError)
  } else {
    throw TypeError(error.contentIsNotString)
  }
}

staticProps(writeFileUtf8)({ error: error })

module.exports = writeFileUtf8
