/*
// Loops

// for loop

for(let i = 0; i < 5; i++){
    console.log(i);
}

const names = ['Alex', 'Deniss', 'Max', 'Ivan'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// while loop

let j = 0;

while(j < 5){
    console.log(`Current number: ${j}`);
    j++;
}

//if statement

const age = 18;

if (age > 21){
    console.log('Welcome to our page');
}

const workers = ['Deniss', 'Alex', 'Ina', 'Maria'];

if (workers.length > 3){
    console.log('That is big company');
}

// else if 

const password = 'pssword123121';

if(password.length > 12 && password.includes('@')){
    console.log('password is strong');
} else if(password.length > 8 || password.includes('@')){
    console.log('Password is too short or not strong');
} else if(!password.length == 10){
    console.log('We do not like your password');
} else {
    console.log('Password is weak');
}

console.log(!true);
console.log(!false);

//let ages = [9, 18, 35, 15]
//Loops through all elemnt (ages) and
// print if this person can drink alcohol

let ages = [9, 18, 35, 15];
let time = 21;
//If time > 22 - age doesn't matter, no alco
for (let i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        console.log(`You can drink alco, you are ${ages[i]}`);
    } else {
        console.log('You too young for alco');
    }
}
*/
//comment
/*
function greet(){
    console.log('Hi!');
}

//greet();
//greet();



//function expression
const speak = function(name = 'Maris', surname = 'Petro'){//name,surname - tut vvod defolt znacenie
    console.log(`Hi ${name} ${surname}`);
}
speak('Jevgenij','Greibo');

const calculateArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}
const myCircle = calculateArea(5);
console.log(myCircle);

//arrow funcions

const arrowCalculateArea = (radius) => 3.14 * radius**2;


console.log(`Area is: ${arrowCalculateArea(5)}`);

const bill = function(product, tax) {
    let total = 0
    for(let i =0 ; i < product.lenght;i++){
        total += product[i]+product[i] * tax;
    }
    return total;
}
//console.log(bill(50,9 ));

//let tax = 5;

const billk = (product,tax ) => {
    let total = 0;
    for(let i =0 ; i < product.lenght;i++){
        total += product[i]+product[i] * tax;
    }
    return total;
}
console.log(`Area is: ${billk(1,5)}`);
//forEach

let people = ['Max','Deniss','Alex','Ivan'];

//for(let i =0 ;i<people.length;i++){
//    console.log(people[i]);             //viviod tekst massiva 
//}

people.forEach(person => {
    console.log(person);        //vivod tekstovogo massiva
});
*/
//console.log(sortArray(array));
//array.forEach(person => {
    
    //console.log(person);        //vivod tekstovogo massiva
//});
/*
let array = [89,46,0,35,1,-2,35];

let sortArray = (array) => {
    let len = array.length; // do kakogo elementa dvigatj - pointer
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j]; // dvigajet vpravo esli bolse
                array[j] = array[j + 1];//peredvigajet mensee nazat
                array[j + 1] = tmp; // soxranaet peremennuju iz vremenoj
                //console.log(array)//vivod iteracii
            }
        }
    }
    return array;
};
console.log(`sorted array is: ${sortArray(array)}`);
console.log(array);
*/
// objects 
/*
let user = {
    name: 'Deniss',
    age: 30,
    email: 'deniss@gmail.com',
    location: 'Latvia',
    blogs: ['Why 2020 is the best year','Why burgers is good'],
    login() {
        console.log('The user logged in');
    },
    logout()  {
        console.log('The user is logged out');
    },
    logBlogs()  {
        //console.log(this.blogs[1]);
        this.blogs.forEach(person => {
            console.log(`User blog : ${person}`);        //vivod tekstovogo massiva
        });
    },

};
//console.log(this )

user.name = 'Alex';
console.log(user.logBlogs());

const key = 'blogs';
console.log(user[key]);

//Create object Car - 3 properties, 2 methods.
//log one property one method

let car = {
    brand: 'bmw',
    engine: 'disel',
    country: 'Germany',
    fuel : function(){
        console.log('Please give me fuel');
    },
    demagedTire: function(){
        console.log('Tire is broken');
    }
    
}

console.log(car.brand);
*/
/*
//MATH OBJ

console.log(Math);

const number = 7.222;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));


const random = Math.random();
console.log(random);                //random 0-100
console.log(Math.round(random*100));


let = array = [{name: 'Deniss', age: 27},{name: 'Max', age: 23}]
console.log(array[0].name);
*/
/*
//Scrabble 7 letters in hand

let = array1 = [
    {title: "N", score: 1},
    {title: "K", score: 5},
    {title: "Z", score: 10},
    {title: "X", score: 8},
    {title: "D", score: 2},
    {title: "A", score: 1},
    {title: "E", score: 1},
]

let arrayObjects = function(array1){
    let sum = 0;
    array1.forEach(element => {
        sum += element.score;
    });
    
return sum;

}
console.log(arrayObjects(array1));

//Primitive Type vs Reference Type
//Primitive types
//numbers,sctrings,booleand,...

//reference type
//all tpe of objects,arrays,functions

//primitive type
let scoreOne = 50;
let scoreTwo = scoreOne;
scoreOne = 100
console.log(`scoreOne: ${scoreOne} , scoreTwo ${scoreTwo}`);

//reference type

let userOne = {name:'Deniss',age: 30}
let userTwo = userOne;

console.log(userOne, userTwo);
userTwo.age = 40;
console.log(userOne, userTwo);

//function toArray
//accapts objects
//returns Array
//object - {a: 1, b:1}
//return [["a",1],["b",2]]
*/

const latters = {a:1 , b:1};
let arr = 100;
let letters2 = function (transform){

    console.log(Object.values(latters));
 
}

const test = Object.keys(latters);

const test2 = Object.values(latters);

const entries = Object.entries(latters);
const newArray = entries[0].concat(entries[1]);
console.log(newArray)
