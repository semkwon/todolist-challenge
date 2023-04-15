// arr
const arr = [1, 2, 3];
console.log(arr);

const filArr = arr.filter((value) => value !== 2);
console.log(filArr);

// arr1
const arr1 = [
  { id: 1, text: "one" },
  { id: 2, text: "two" },
  { id: 3, text: "three" },
];
console.log(arr1);

const filArr1 = arr1.filter((object) => object.id !== 2);
console.log(filArr1);

const filArr1_1 = arr1.filter((object) => object.text !== "three");
console.log(filArr1_1);

// fruits
let fruits = ["apple", "banana", "kiwi", "melon"];

let moreThanFiveLetters = fruits.filter((v, i) => v.length >= 5);
console.log(fruits);
console.log(moreThanFiveLetters);
