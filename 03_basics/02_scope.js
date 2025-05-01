
//ye var bahi declare howa hai ye hai globle scope. 
//Globle scope mai jo bhi value ap likhenge wo block scope
//ke andar hogi

// var a = 300;

// ----------------------
// if ke andar jo sara data hai wo block scope hai
//lekin jo value block scope ke andar likhte hai 
//wo bahir nahi jani chahiye.
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;

// }

// console.log(a);
// console.log(b);
// console.log(c);


//----------------------------

// let a = 300;
// const b = 200;
// if(true){
//     let a = 10;
//     const b = 20;

//     console.log(a);
    
// }

// console.log(a);
// console.log(b);




// --------------------------
// Nested Scope:

function one(){
    const username = "Yasir"

    
    function two() {
        const fathername = "Tahir"
        // console.log(username);
        // console.log(fathername);
        
    }
    //ye block scope ka log hai bahir nhi run hoga 
    //sir under run hoga
    // console.log(fathername);
    
    two()
}

one()

// -----------------------

if(true){
    const username = "Yasir"
    if(username === "Yasir"){
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



