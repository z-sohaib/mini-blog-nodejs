const fs = require('fs');

// reading files

// fs.readFile('./docs/blog12.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         // console.log(data)
//         console.log(data.toString());
//     }
    
// })

// console.log('last line');

// writing files

// fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt', 'Hello World', () => {
//      console.log('file was written');
//  })


// directories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log('folder created');
//         }
//     });
// } else {
//     console.log('file exists, lets remove it');
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('folder deleted');
//         }
//     })
// }




// deleting files

// if(fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('file deleted');
//         }
//     })
// }