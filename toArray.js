// const latters = {a: 1 ,
//     b: 2};
// let arr = 100;
// let letters2 = function (transform){

// console.log(Object.values(latters));

// }

// const test = Object.keys(latters);

// const test2 = Object.values(latters);

// const entries = Object.entries(latters);
// const newArray = entries[0].concat(entries[1]);
// //console.log(newArray)



// const toArrayFunkc = function(){
// var a=[], b = latters;
// a.push(latters.a , latters.b);
// var newData = [a,b];
// console.log(newData)
// }
// toArrayFunkc();

// function saveToArray() {
// // const save = [];
// const bigArray = [];
// let save = Array.from(latters); // (*)
// for (let lat in latters) {
// if (latters.hasOwnProperty(lat)) {
// //save.push(lat ,latters.a,latters.b);
// save.push(lat + ":" + latters[lat]);
// }

// }

// console.log(save);

// }
// saveToArray();




let rectengle = {
    edge1: 10,
    edge2: 5,
    getArea: function () {
        // console.log(`rectengle area = ${rectangleArea(4,2)}`);
        return this.edge1 * this.edge2;
    },
    getInfo: function () {
        console.log(`rectangle value edge1: ${this.edge1} ,edge2: ${this.edge2}`);
    }
}


function rectangleArea(number, number1) {
    return number * number1;
}


let circle = {
    radius: 2,
    getArea: function (radius) {
        // console.log(`circle area = ${Math.PI*this.radius*2}`);
        return Math.PI * this.radius * 2;
    },
    getInfo: function () {
        console.log(`circle value radius: ${this.radius}}`);
    }
}
let square = {
    edge: 14,
    getArea: function () {
        //      console.log(`square area = ${this.edge*this.edge}`);
        return this.edge * this.edge;
    },
    getInfo: function () {
        console.log(`square value edge: ${this.edge}}`);
    }
}
const fs = require('fs');
const funkc1 = function (figure, value) {
    if (figure == 'square') {
        square.edge = value;
        //zapisj v faili
        fs.writeFile('./result.txt', funkc1(square,4), () => {
            console.log('file result.txt written');
        });
        return `square area = ${square.getArea()}`;
    };
    if (figure == 'circle') {
        circle.radius = value;
        //zapisj v faili

        return `circle area = ${circle.getArea()}`;
    };
}
const funkc2 = function (figure, value, value2) {
    if (figure == 'rectengle') {
        rectengle.edge1 = value;
        rectengle.edge2 = value2;
        //zapisj v faili

        return `rectengle area = ${rectengle.getArea()}`;
    };
}



//console.log(rectengle.getArea());
//console.log(rectengle.getInfo());

// console.log(circle.getArea());
// console.log(circle.getInfo());

// console.log(square.getArea());
console.log(funkc1('square', 4));
console.log(funkc1('circle', 2))
console.log(funkc2('rectengle', 2, 3))