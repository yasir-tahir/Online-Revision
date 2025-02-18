//Dates

// let myDate = new Date();

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toUTCString());


// let myCreatedDate = new Date (2025, 1, 13 )
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date (2025, 1, 13, 5, 33 )
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("02-17-2025");
// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

const date = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(date);
