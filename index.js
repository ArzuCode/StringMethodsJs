//1.startsWith:

const str = "Hello, World!";
const startsWithHello = str.startsWith("Hello");
console.log(startsWithHello); // true

//2.includes:

const str1 = "Hello, World!";
const includesWorld = str.includes("World");
console.log(includesWorld); // true

//3.split:

const str2 = "apple,banana,cherry";
const fruitsArray = str.split(",");
console.log(fruitsArray); // ["apple", "banana", "cherry"]
const str3 = "apple,banana,cherry,grape";
const fruitsArray1 = str.split(",", 2);
console.log(fruitsArray); // ["apple", "banana"]
