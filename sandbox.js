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

//comment