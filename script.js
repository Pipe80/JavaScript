let js='amazing';
console.log(40+8+23-10);

let firstName="Pipe";
console.log(firstName);

//Lecture, Values and Variables
var country="Finland";
var continent="Europe";
var population=5500000;
console.log(country);
console.log(continent);
console.log(population);

//Lecture, Data Types
var isIsland=false;
let language;
console.log(isIsland);
console.log(population);
console.log(country)
console.log(language);

//Lecture, let, const and var
language="Finnish";
console.log(language);

//Lecture, Basic Operators
population=population/2;
console.log(population);
console.log(typeof country);

const now=2023;
const agePipe=now-1980;
const ageSarah=now-2010;
console.log(ageSarah, agePipe);
console.log(ageSarah *2, ageSarah / 2, 2**3);
//2**3 is 3=2*2*2
console.log(ageSarah >=18);

//Coding Challenge #1

/* Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � */

// let markMass = 78;
// let markHeight = 1.69;
// let markBMI = markMass / markHeight ** 2;
// console.log(markBMI);

// let johnMass = 92;
// let johnHeight = 1.95;
// let johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);

// if (johnBMI > markBMI) {
// console.log("John has a higher BMI than Mark!");}
// else {
// console.log("John has a lower BMI than Mark!");
// }
let markMass = 95;
let markHeight = 1.88;
let markBMI = markMass / markHeight ** 2;
console.log(markBMI);

let johnMass = 95;
let johnHeight = 1.88;
let johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

if (johnBMI > markBMI) {
console.log("John has a higher BMI than Mark!");}
else {
console.log("John has a lower BMI than Mark!");
}
console.log(johnBMI > markBMI);

const firstName1='jonas';
const job='coder';
const birthYear=1991;
const year=2037;
const jonas="I'm " + firstName1 + ", a "  + (year-birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew= `I'm ${firstName1}, a ${year-birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`string with \n\ multiple \n\ lines 😊`)

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);

//type conversion
const inputYear='1991';
console.log(inputYear);
console.log(Number(inputYear) +18);
console.log(Number(inputYear));

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);

//type coercion
console.log('I am ' + 23 +' years old');

let n='1' +1;
n=n-1;
console.log(n);

const favourite=Number(prompt("What's your favorite number?"));
console.log(favourite);
if(favourite===23)
{console.log('Correct 23')}
else if(favourite<23)
{console.log("It's smaller than 23")}

if (favourite !==23)
{console.log("Why not 23?")}


//basic boolean logic
const onAjokortti=true;
const onHyvaNako=false;

console.log(onAjokortti&&onHyvaNako);
console.log(onAjokortti||onHyvaNako);
console.log(!onAjokortti);

const ajaako=onAjokortti&&onHyvaNako;
if(ajaako) 
console.log('Sarah saapi ajjaa');
else
console.log('joku toinen rattihin');

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphins =(96 + 108 + 89) / 3;
console.log(dolphins);

const koalas=(88 + 91 + 110) / 3;
console.log(koalas);

if (dolphins > koalas) {console.log('Dolphins wins!');}
if (koalas === dolphins) {console.log('Its a tie');}
if (koalas > dolphins) {console.log('Koalas wins!');}  