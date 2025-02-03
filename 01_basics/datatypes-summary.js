// *** Primitive *** \\
// There are seven types of primitive!

// 1 String
// 2 Number
// 3 Boolean
// 4 Null
// 5 Undefined
// 6 Symbol
// 7 BigInt

const score = "100"; //String
const scoreValue = 100.3 //Number
const isLoggedIn = false //Boolean
const outsideTemp = null //Null
let userEmail; //Undefined
const id = Symbol('123'); //Symbol
const anotherId = Symbol('123') //Symbol
const bigNumber = 5676676777868n //bigint

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(id === anotherId);
// console.log(typeof bigNumber);




// Reference  (Non primitive)
// There are three types of non-primitive

// 1 Array
// 2 Object
// 3 Function

const heros = ["Yasir", "Saad", "Ibraheem"]; //Array
console.log(heros);


const obj = {
    name : "Yasir",
    email : "yasir@ymail.com",
    password : "223344"
} //Object
console.log(obj);


const myFunction =  function () {
    console.log("Hello World");
    
}

myFunction();