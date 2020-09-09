const latters = {a: 1 ,
    b: 2};
let arr = 100;
let letters2 = function (transform){

console.log(Object.values(latters));

}

const test = Object.keys(latters);

const test2 = Object.values(latters);

const entries = Object.entries(latters);
const newArray = entries[0].concat(entries[1]);
//console.log(newArray)



const toArrayFunkc = function(){
var a=[], b = latters;
a.push(latters.a , latters.b);
var newData = [a,b];
console.log(newData)
}
toArrayFunkc();

function saveToArray() {
// const save = [];
const bigArray = [];
let save = Array.from(latters); // (*)
for (let lat in latters) {
if (latters.hasOwnProperty(lat)) {
//save.push(lat ,latters.a,latters.b);
save.push(lat + ":" + latters[lat]);
}

}

console.log(save);

}
saveToArray();
