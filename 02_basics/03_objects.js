
//Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Yasir",
    age : 23,
    email : "yasir@gmail.com",
    [mySym] : "mykey1",
    mySym : "mykey2",
    location : "karachi",
    isLoggedIn : false,
    lastLoginDays : ["Mon", "Thu"]

}
jsUser["mySym"] = "saad";
// Object.freeze(jsUser)
jsUser["mySym"] = "yasir";

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
    
}


jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



