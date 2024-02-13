//How to freeze the values in Js

const user={
    name:"arisha chaudhary",
    age: 20,
    email:"arishachaudhary123@gmail.com",
    city:"hapur",
    "isLogging" : "True",
}

user.email = "arisha1200@gmail.com"
console.log(user["email"]);

//Freeze Values
Object.freeze(user)
user.email = "chotu00@gmail.com"
console.log(user["email"]);
console.log(user);