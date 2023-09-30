import fs from "fs";
import path from "path";

/**
 * Writes content to file using utf8 encoding.
 *
 * @param {string} filePath
 * @param {string | Buffer} content
 *
 * @return {Promise}
 */

export default function writeFileUtf8(filePath, content) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filePath);

    mkdirP(dir, {}, (error) => {
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

///////////////////////////////////////////////////////////////////////
// Follows `mkdirP` implementation
//
// Credits: kudos to isaacs (npm author)
// Original code from here:
// https://github.com/isaacs/node-mkdirp/blob/0.5.1/index.js
///////////////////////////////////////////////////////////////////////

var _0777 = parseInt("0777", 8);

function mkdirP(p, opts, f, made) {
  if (typeof opts === "function") {
    f = opts;
    opts = {};
  } else if (!opts || typeof opts !== "object") {
    opts = { mode: opts };
  }

  var mode = opts.mode;
  var xfs = opts.fs || fs;

  if (mode === undefined) {
    mode = _0777 & ~process.umask();
  }
  if (!made) made = null;

  var cb = f || function () {};
  p = path.resolve(p);

  xfs.mkdir(p, mode, function (er) {
    if (!er) {
      made = made || p;
      return cb(null, made);
    }
    switch (er.code) {
      case "ENOENT":
        mkdirP(path.dirname(p), opts, function (er, made) {
          if (er) cb(er, made);
          else mkdirP(p, opts, cb, made);
        });
        break;

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, function (er2, stat) {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) cb(er, made);
          else cb(null, made);
        });
        break;
    }
  });
}
