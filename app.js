// let arr= [1,2,3];
// console.log(arr);

// //global objects

// setTimeout(()=> {
// console.log('Stop interval');
// //clearInterval(interval);
// }, 1000);

// console.log('I am outed of sync')

// // const interval = setInterval(()=>{
// //     console.log('in interval');
// // },10)

// //console.log(__dirname);
// //console.log(__filename);
// console.log(__dirname,__filename);

// const {people,ages} = require('./people');

// console.log(ages.length,people.length);


// const os = require('os');
// console.log(os);

const fs = require('fs');
/*
//reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
console.log('last line')

//writing file
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file written');
});

fs.writeFile('./docs/blog2.txt', 'hello,again', () => {
    console.log('FIle blog2 is written');
})

//directories
if (!fs.existsSync('./assets')) { //proverka na susestvovanie papki
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('folder is created');
        }
    })
} else {
    fs.rmdir('./assets', (error) => { //directories delete
        if (error) {
            console.log(error);
        } else {
            console.log('Folder removed');
        }
    })
}

//delete files
if (fs.existsSync('./docs/deletme.txt')) {
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('File removed');
        }
    })
}


if (!fs.existsSync('./docs/tmpPassword.txt')) {
fs.writeFile('./docs/tmpPassword.txt', 'pass@a1!', () => {
    console.log('file tmpPassword.txt written');
});
}else { 
    fs.unlink('./docs/tmpPassword.txt', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('File tmpPassword removed');
        }
    })

}
*/
//streams and buffers 
const readStream = fs.createReadStream('./docs/blog3.txt', {
    encoding: 'utf8'
})
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (buffer) => { //tut kopiruet s bloga3.txt 97stroka
    //console.log('----------- NEW CHUNK ----------');
   // console.log(buffer);
   writeStream.write('\nNEW CHUNK\n');
   writeStream.write(buffer);
});