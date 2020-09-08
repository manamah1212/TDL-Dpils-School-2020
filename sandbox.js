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