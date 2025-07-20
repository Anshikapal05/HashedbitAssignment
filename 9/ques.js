
// Variable declarations
function variableDeclaration() {
    var a = 1; // Function-scoped
    let b = 2; // Block-scoped
    const c = 3; // Block-scoped

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
}
variableDeclaration();

console.log("\n")
//  Fruits array & get second fruit
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
function getSecondFruit() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    return fruits[1]; // Returns 'Banana'
}


console.log("Second fruit:", getSecondFruit(fruits));

console.log("\n")
//  Add and remove element from array
function modifyArray(arr) {
  arr.push(20);
  arr.push(25);
  arr.pop();
  return arr;
}

const Arrays = [5, 10, 15];
console.log("Modified array:", modifyArray(Arrays));

console.log("\n")

//  Square numbers using map
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log("Squared numbers:", squareNumbers(numbers));

console.log("\n")

//  Filter out even numbers
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", filterOddNumbers(numbers));
console.log("\n")

//  Person object and greeting
const person = {
    name: 'Anshika',
    age: 21,
    occupation: 'Developer'
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and I work as a ${p.occupation}.`);
}
console.log("\n")
greetPerson(person);



//  Calculate rectangle area
function getRectangleArea(rect) {
  return rect.width * rect.height;
}

console.log("Rectangle area:", getRectangleArea({ width: 9, height: 12 }));


console.log("\n")
//  Get object keys
function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log("Person keys:", getObjectKeys(person));


console.log("\n")
//  Merge two objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };

console.log("Merged object:", mergeObjects(objA, objB));

console.log("\n")
//  Sum array using reduce
function sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0); // Returns the sum of all numbers
}

console.log("Sum of numbers:", sumNumbers(numbers));

