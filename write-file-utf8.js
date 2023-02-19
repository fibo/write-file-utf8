import fs from "fs";
import mkdirp from "mkdirp";
import path from "path";

/**
 * Writes content to file using utf8 encoding.
 *
 * @param {String} filePath
 * @param {String} content
 *
 * @return {Promise}
 */

export default function writeFileUtf8(filePath, content) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filePath);

    mkdirp(dir, {}, (error) => {
      if (error) {
        reject(error);
      } else {
        fs.writeFile(filePath, content, "utf8", (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      }
    });
  });
}
