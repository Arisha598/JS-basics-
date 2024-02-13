//functions in JS

const user={
    name:"arisha chaudhary",
    age: 20,
    email:"arishachaudhary123@gmail.com",
    city:"hapur",
    "isLogging" : "True",
}
user.greeting = function(){
    console.log("Hello js User")
}
console.log(user.greeting)
console.log(user.greeting())

user.greetingtwo = function(){
    console.log('Hello js User, ${this.name}');
}

console.log(user.greeting)
console.log(user.greetingtwo())