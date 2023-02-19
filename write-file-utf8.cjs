const fs = require("fs");
const { mkdirp } = require("mkdirp");
const path = require("path");

/**
 * Writes content to file using utf8 encoding.
 *
 * @param {String} filePath
 * @param {String} content
 *
 * @return {Promise}
 */

function writeFileUtf8(filePath, content) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filePath);

    mkdirp
      .then(dir, () => {
        fs.writeFile(filePath, content, "utf8", (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = writeFileUtf8;
