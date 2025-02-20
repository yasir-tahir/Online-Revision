// ********* array ********* \\

// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[1]);

// myArr.push(6) // push last mai array add karta hai
// myArr.push(7) // push last mai array add karta hai
// myArr.pop()   // pop last se array delete karta hai

// myArr.unshift("Yasir"); // unshift first value mai add karta hai
// myArr.shift(); // shift first value ko delete karta hai

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr); // join method gapes kp khatam karta hai
// console.log(typeof newArr); // iski type of string hoti hai


const newArr = [0, 1, 2, 3, 4,5];
// console.log("A :" , newArr);

// const arr1 = newArr.slice(1) //ager ap single value dege tw osse phele sab delete hoga
// const arr1a = newArr.slice(1, 3) //ager ap 2 value dege tw osse se phele or osse end tak del karega
// console.log(arr1, arr1a); 

console.log("B :", newArr);

// const arr2 = newArr.splice(1)
const arr2a = newArr.splice(1, 3)

console.log( arr2a); 
