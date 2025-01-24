console.log(" < Thinking Functionally > ");

//todo: Sum of an array of numbers
//todo: Average of an array of numbers
//todo: Longest string in an array
//todo: Strings longer than a given number
//todo: Print numbers from 1 to n using recursion
 
const numbers = [1, 2, 4, 8, 10];
const string = "I'm tired and just want to sleep this morning";
const words = string.split(" ");

//* Functions
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

const averageArray = arr => (arr.length ? sumArray(arr) / arr.length: 0);

const longestString = arr => arr.reduce((longest, str) => (str.length > longest.length ? str: longest), "");

const stringsLongerThan = (arr, length) => arr.filter(str => str.length > length);

const printNumbers = n => {
    if (n < 1) return
    printNumbers(n - 1)
    console.log(n)
}
  
//* Logging my functions
console.log("Sum:", sumArray(numbers));
console.log("Average:", averageArray(numbers));
console.log("Longest word:", longestString(words));
console.log("Words longer than 5 characters:", stringsLongerThan(words, 5));
console.log("Print N:")
printNumbers(25);

console.log("");

//!==================================================================================================================================================
console.log(" < Thinking Methodically > ");

//todo - Sort array
//todo - Filter array (remove > 50)
//todo - Map array (change & increase)
//todo - Use reduce method for sum (then result for average)

const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
  
//* More Functions!
const sortedByAge = [...people].sort((a, b) => Number(a.age) - Number(b.age));
  
const filteredByAge = people.filter(person => Number(person.age) <= 50);
  
const mappedPeople = people.map(person => ({
    ...person,
    job: person.occupation,
    age: String(Number(person.age) + 1)
}));
  
const sumOfAges = people.reduce((sum, person) => sum + Number(person.age), 0);
  
const averageAge = sumOfAges / people.length;
  
//* Log'em!
console.log(sortedByAge);
console.log(filteredByAge);
console.log(mappedPeople);
console.log(sumOfAges); // Sum of ages
console.log(Math.ceil(averageAge)); // Average age
  
console.log("")

//!=========================================================================================================================================================
console.log(" < Thinking Critically > ");

//? Increment
function incAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age += 1;
    obj.updated_at = new Date();
}
  
//? Copy & Increment
function incAgeCopy(obj) {
    const newObj = { ...obj };
    if (!newObj.age) newObj.age = 0;
    newObj.age += 1;
    newObj.updated_at = new Date();
    return newObj;
}
  
//! LOG
const person = { name: "Superman", age: 35, updated_at: new Date("2024-12-31") };
incAge(person);
console.log("Increment by reference:", person);
  
const newPerson = incAgeCopy(person);
newPerson.updated_at.setTime(new Date("2025-01-01").getTime())
console.log("Original after modifying:", newPerson);
console.log("Copied:", person);