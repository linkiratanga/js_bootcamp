/* 
let first_name = "Link";
const born_year = 2003;
let current_year = 2024;
let statment = true || false;
console.log(typeof null);
// let unkown;

console.log(`i am ${first_name} born in ${born_year}`);
console.log(typeof statment); 
*/

//  Arthmetic Operators
/*
let mark = 30 + 5 * 2;
mark++;
mark += 9;
console.log(mark);
let power = 2 ** 4;
console.log(power);
 const firstName = "Link";
 const lastName = "Iratanga";
console.log(firstName + " " + lastName)
*/

// Assigment Operators
/*
let x = 15 + 5;
x += 1;
x /= 3;
console.log(x)
*/

// comparison operators
/*
console.log(1 >= 1) // >, <, >=, <=
console.log(40 + 2 > 40 - 2);
let a, b; 
a = b = 25 - 10 - 5; 
console.log( a , b )
*/

//Template literal
/*
console.log(` I love 
    you y'all
    Dear family`)
*/

// Statement
/*
const age = 18;
const isMature = age >= 18;
const yearsLeft = 18 - age;
if (isMature) {
  console.log("You are eligible to a driving license");
} else {
  console.log(`You are not eligible, you still has ${yearsLeft} year waiting`);
}
*/
// example
/*
const birthYear = 2003;
let century;
if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);
*/

// exercise
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

const comparison = BMIMark > BMIJohn;

if (comparison) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

// Type conversion and coercion
/*
const inputYear = "2003";
console.log(inputYear -  18);
console.log("23" * "2")
const sampleNumber = 5;
console.log(typeof String(sampleNumber));
*/

// Truthy and Falsy values
// 5 falsy value: 0, "", undefined, null, NaN
/*
let account;
console.log(Boolean(account));
console.log(Boolean(""));
*/

//Equality operator
// strict === evoid type coersion to make sure equality is accurate
/*
let age = "12";
if (age === 12) console.log("you are a teen");
*/

//Boolean Logic / Logical Operators : && , ||, !
/* let age = 18;
let health = "Good vision";
if( age >= 18 && health){
  console.log("You are good to go")
}
*/
//Exercice
/*
let scoreDolphins = (96 + 108 + 89)/3;
let scoreKoalas = (88 + 91 + 110)/3;
if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
} else if(scoreDolphins === scoreKoalas){
    console.log("Both win the trophy")
} else {console.log("Koalas win the trophy")}
*/

// Switch statement,  just like if statement for equality and many else if ...
/*
const day = "thursday";
switch(day){
  case 'monday':
    console.log("Plan week task");
    break;
  case 'tuesday':
    console.log("Start a week");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("2 days of coding");
    break;
  case 'friday':
    console.log("Start the weekend");
    break;
  default:
    console.log("Not a valid input")
}
*/

// Conditional (tenary) operator, just like an if statment but short from
/*
const age = 21;
age >= 21 ? console.log("You are mature") : console.log("Not mature at all");

const maturityTest = age >= 21 ? "Yes" : "Not";
console.log(maturityTest)
*/
4 > 3 && 5 < 1 ? console.log("Type a small number") : console.log("Type a bigger number")

// Exercise
/*
let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
*/
