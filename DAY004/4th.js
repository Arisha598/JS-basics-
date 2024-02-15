//function 

function loggingUser(username){
    if(username === undefined){
        console.log("enter your name");

    }
    return `${username} just logged in`
}
console.log(loggingUser());