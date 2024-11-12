"use strict";
// FUNCTION TYPES
/*                 
// FUNCTION DECLARATION
function ageCalc1(birthYear1) {
  const age = 2024 - birthYear1;
  return age;
}
console.log(ageCalc1(2003));

// FUNCTION EXPRESSION

const ageCalc2 = function (birthYear) {
  return 2030 - birthYear;
};
console.log(ageCalc2(2010));


// ARROW FUNCTION - just like fonction expression but not "This" keyword

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


// ARRAYS methods
/*
const nameList = ["Link", "Peter", "Bahati"];
nameList.push("Yohana"); // add element to the end
nameList.unshift("Bukuru"); // add element to the beginning
nameList[2] = "Johnson";


nameList.pop(); // remove the last element
nameList.shift(); // remove the first element

console.log(nameList);
console.log(nameList.indexOf("Peter")); // checks index
console.log(nameList.includes("Yohana")); // checks els existence

if(nameList.includes('Johnson')){
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

// OBJECTS  , best for unstructured data
/*
const myIdentity = {
  firstName: "Link",
  lastName: "Iratanga",
  age: 2024 - 2003,
  job: "ML engineer",
  friends: ["Yohana", "Banks", "Malcom X"],
};

myIdentity.home = "Bujumbura"; // new property with value
myIdentity["bornPlace"] = "Kinama";
myIdentity.friends.push("Jafari");
console.log(myIdentity);
*/

// OBJECT Methods works in a similar way with Arrays

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

const link = {
  fullName: "Link Iratanga",
  mass: 50,
  height: 1.5,
  health: function () {
    this.mass > 55 ? (this.condition = "Exellent") : (this.condition = "Bad");
    return this.condition;
  },
};

const statment = `${link["fullName"]} is in ${link.health()} condition`;
console.log(statment);

console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s BMI (${mark.bmi})`
  );
}
*/
// FOR LOOP
// for loop keeps running while conditon is TRUE

/*
const nameList = ["Malcom X", "Peter", "Bahati"];
const types = [];
nameList.push("Douglas");

for (let initial = 0; initial < nameList["length"]; initial++) {
  // console.log(`Mr ${nameList[initial]} is my friend`);
  // console.log(typeof nameList[initial]);
  types[initial] = nameList[initial];
}

console.log(types)

const birthYear = [1982, 1986, 1993, 2003];
const ages = []; 

for(let ider = 0; ider < birthYear.length; ider ++){
  ages.push(2024 - birthYear[ider]);
}

console.log(ages);
*/
// continue and break // !! not well understood ##
/*
const nameList = ["Malcom X", 2003, "Bahati"];
const types = [];

for (let initial = nameList.length - 1; initial >= 0; initial--) {
  if (typeof nameList[initial] == "number") break; //
  types.push(typeof nameList[initial]);
}
console.log(types);
*/
/*
for(let times = 0; times <= 5; times ++){
  console.log(`This is Laps number ${times}`)
  for(let laps = 10; laps > 0; laps -= 2){
    console.log(`Round number ${laps}`);
  }
}
*/

//    WHILE LOOP, same as for but initial value is store in a separated variable
// Ideration for initial value is reassigned separeted but inside the loop
/*
let rep = 0;

while(rep <= 10){
  console.log(` You lifted ${rep} Times`)
  rep += 2;

}

let diceRandom = Math.trunc(Math.random() * 6) + 1;
console.log(diceRandom);

while(diceRandom !== 6){
  console.log(`You rolled a ${diceRandom}`)
  diceRandom = Math.trunc(Math.random() * 6) + 1;
  if(diceRandom === 6) console.log(`You hit a 6`)
}
*/
// CODING CHALLENGE #4
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (tip) {
  if (tip >= 50 && tip <= 300) {
    return tip * 0.15;
  } else {
    return tip * 0.2;
  }
};

for (let ider = 0; ider < bills.length - 1; ider++) {
  tips.push(calcTip(bills[ider]));
  totals.push(tips[ider] + bills[ider]);
  totals[ider] = tips[ider] + bills[ider];
}
console.log(tips);
console.log(totals);
*/
