
function callMyName(){
    console.log('Y');
    console.log('A');
    console.log('S');
    console.log('I');
    console.log('R');
    
}

// callMyName()

function addTwoNumbers(num1, num2){ //parameters
    // console.log(num1 + num2);
    
}

addTwoNumbers()
// addTwoNumbers(12,18) //01-reference & 02-arguments

// ---------------------

function addTwoNumbers(num1, num2){ 

    let result = num1 + num2
    return result
}

const result = addTwoNumbers(12,18)

// console.log("Result :", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Yasir"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


// function loginUserMessage(username){
// if(username === undefined){
//     console.log('Please enter a username');
//     return
// }

//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Yasir"));
// console.log(loginUserMessage());


// function loginUserMessage(username){
//     if(!username){
//         console.log('Please enter a username');
//         return
//     }
    
//         return `${username} just logged in`
//     }
    
//     console.log(loginUserMessage("Yasir"));
//     console.log(loginUserMessage());
    


function loginUserMessage(username = 'Yasir'){
    if(!username){
        console.log('Please enter a username');
        return
    }
    
        return `${username} just logged in`
    }
    
    console.log(loginUserMessage("Saad"));
    console.log(loginUserMessage());
    