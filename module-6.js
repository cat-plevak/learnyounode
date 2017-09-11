// const fs = require('fs')
// const path = require('path')
//
// module.exports = function(directory, filterStr, callback) {
//   fs.readdir(directory, (err, files) => {
//     if (err) {
//       return callback(err)
//     } else {
//       files = files.filter((file) => {
//         return path.extname(file) === '.' + filterStr
//       })
//     }
//     callback(null, files)
//   })
// }

const fs = require('fs');
const path = require('path');

module.exports = function(directory, ext, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err)
    } else {
      files = files.filter((file) => {
        return path.extname(file) === '.' + ext
      })
    }
    callback(null, files)
  })
}
