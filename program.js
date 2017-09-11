// console.log(process.argv);
// let total = 0;
//
// function summed() {
//   for(i = 2; i < process.argv.length; i++) {
//     let number = Number(process.argv[i]);
//     total += number;
//   }
//   console.log(total);
// }
//
//
// summed();


// const fs = require('fs');
// const contents = fs.readFileSync(process.argv[2]);
// const lines = contents.toString().split('\n').length-1;
// console.log(lines);



// const fs = require('fs');
//
// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//   if (err) {
//     console.log('shucks', err)
//   }
//   else {
//
//     let lines = data.split('\n')
//     console.log(lines.length-1)
//     // lines.forEach((l, idx) => {
//     //   console.log(`${idx + 1}`)
//     // })
//   }
// });


// const fs = require('fs');
// const path = require('path');
// const folder = process.argv[2];
// const ext = '.' + process.argv[3];
//
// fs.readdir(folder, (err, files) => {
//   if (err) {
//     console.log('shucks', err)
//   } else {
//     files.forEach((file) => {
//       if(path.extname(file) === ext) {
//         console.log(file)
//       }
//     })
//   }
// })


const filterFn = require('./module-6.js');
const directory = process.argv[2];
const filterStr = '.' + process.argv[3];
