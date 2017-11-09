const fs = require('fs')
const staticProps = require('static-props')

const error = {}

staticProps(error)({
  contentIsNotString: 'write-file-utf8 / argument "content" is not a string'
})

function throwError (err) {
  if (err) throw err
}

/**
 * Write content to file using utf8 encoding
 *
 * @param {String} filePath
 * @param {String} content
 * @param {Function} [callback]
 */

function writeFileUtf8 (filePath, content, callback) {
  // Argument callback defaults to throwError.
  if (typeof callback !== 'function') callback = throwError

  if (typeof content === 'string') {
    fs.writeFile(filePath, content, 'utf8', callback)
  } else {
    throw TypeError(error.contentIsNotString)
  }
}

staticProps(writeFileUtf8)({ error })

module.exports = writeFileUtf8
