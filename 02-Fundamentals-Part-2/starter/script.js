"use strict";
/*
const ageGap = 2;
const legalName = "iratanga";
const ageTest =
  ageGap >= 2 ? "The age gap 2 is great " : "That's too big age gap";
console.log(ageTest);
*/

// functions

/* function juiceMachine(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const machineReturn = juiceMachine(5, 8);
console.log(machineReturn);
*/
/*
// Function Declaration
function ageCalc1(birthYear1) {
  const age = 2024 - birthYear1;
  return age;
}
console.log(ageCalc1(2003));

// Function Expression

const ageCalc2 = function (birthYear) {
  return 2030 - birthYear;
};
console.log(ageCalc2(2010));

// example
const ageCalc5 = function (born, name) {
  const currentAge = 2050 - born;
  const message = `Mr ${name} is ${currentAge}, he is mature enough`;
  return message;
};
console.log(ageCalc5(2005, "Link"));

// Arrow function - just like fonction expression but not "This" keyword

const ageCalc3 = (birthYear) => 2037 - birthYear; // no return needed
console.log(ageCalc3(2005));

const ageCalc6 = (war_era) => {
  const start = 2024 + war_era;
  const insight = `The war started in 2004 in ${war_era} ago`;
  return insight;
}
console.log(ageCalc6(10))
*/

// exercise : Fruit processor
/*
const cutFruitMachine = function (fruit) {
  const fruitCutting = fruit * 4;
  return fruitCutting;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitMachine(apples);
  const orangePieces = cutFruitMachine(oranges);
  const juice = `Juice is made up ${apples} Apples (${applePieces}) pcs and ${oranges} Oranges (${orangePieces}) pcs.`;
  console.log(" juice machine is working!")
  return juice;
};
console.log(fruitProcessor(2, 6));
*/

// Exercise : Dolphin vs Koalas
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins} )`);
  } else {
    console.log(`No team wins...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
*/

// DATA STRUCTURE

// Array ,  best for structure data
/* const nameList = ["Link", "Peter", "Bahati"];
const marks = new Array(20, 44, 65);
nameList[1] = 'Jobz' // this replace an element
console.log(nameList[1]);
console.log(nameList.length);
console.log(nameList[nameList.length - 1])


// exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear
}

const years = [1990, 1996, 1991];
console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages) */

// Arrays methods
/*
const nameList = ["Link", "Peter", "Bahati"];
nameList.push("Yohana"); // add element to the end
nameList.unshift("Bukuru"); // add element to the beginning

nameList.pop(); // remove the last element
nameList.shift(); // remove the first element

console.log(nameList);
console.log(nameList.indexOf("Peter")); // checks the index
console.log(nameList.includes("Yohana")); // checks element existence

if(nameList.includes('Yohana')){
  console.log(`Peter is your friend`)
} else{
  console.log(`You typed the wrong name!`)
}
*/
// Coding Challenge #2 --> Tipping exercise
/*
const calcTip = function (tip) {
  if (tip >= 50 && tip <= 300) {
    const tipCalc = tip * 0.15;
    return tipCalc;
  } else {
    const tipCalc2 = tip * 0.2;
    return tipCalc2;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
*/

// Objects  , best for unstructured data
/*
const myId = {
  firstName: "Link",
  lastName: "Iratanga",
  age: 2024 - 2003,
  job: "ML engineer",
  friends: ["Yohana", "Banks", "Malcom X"],
};

myId.home = "Bujumbura";
myId["bornPlace"] = "Kinama";
myId.friends.push("Jafari")
const common = "Name";
console.log(myId.friends[0]);
console.log(myId.bornPlace)
console.log(myId["first" + common]); // bracket notation receive data inputs and expressions

console.log(`${myId.firstName} has ${myId.friends.length} friends`);
console.log(myId.friends[length])
*/

// Object Methods
/*
const myId = {
  firstName: "Link",
  lastName: "Iratanga",
  birthYear: 2003,
  job: "ML engineer",
  friends: ["Yohana", "Banks", "Malcom X"],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2024 - this.birthYear; // this , help to access objs inside an obj while using functions
    return this.age;
  },
};

console.log(myId.calcAge());
// console.log(myId['calcAge']());

console.log(myId);
*/
// Challenge
// what element are restricted into an object eg: arrow stats !!
/*
const myId2 = {
  firstName: "Johnson",
  lastName: "Baraka",
  hasDrivingPermit: false,
  bornYear: 1999,
  ageCalc2: function () {
    this.currentAge = 2024 - this.bornYear;
    return this.currentAge;
  },
  message: function () {
    const choice = this.hasDrivingPermit ? "a" : "no";
    return `${
      this.firstName
    } is a ${this.ageCalc2()} Developer and ${choice} Driver license`;
  },
};

console.log(myId2.message());
myId2.state = "California";
myId2.lastName = "Dwayne"
console.log(myId2);
*/

// Coding challenge #3
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
john.calcBMI();

console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
*/
// LOOPS
// for loop keeps running while conditon is TRUE
// for (let initial = 0; initial < 5; initial++) {
//   console.log(`This is Laps ${initial}`);
// }

const nameList = ["Malcom X", "Peter", 500 , "Bahati"];
const types = [];
for (let initial = 0; initial < nameList["length"]; initial++) {
  console.log(`Mr ${nameList[initial]} is my friend`);
console.log(typeof(nameList[initial]))

}