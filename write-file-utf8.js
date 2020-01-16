const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')

/**
 * Writes content to file using utf8 encoding.
 *
 * @param {String} filePath
 * @param {String} content
 *
 * @return {Promise}
 */

function writeFileUtf8 (filePath, content, callback) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filePath)

    mkdirp(dir, {}, (error) => {
      if (error) {
        reject(error)
      } else {
        fs.writeFile(filePath, content, 'utf8', (error) => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        })
      }
    })
  })
}

module.exports = writeFileUtf8
