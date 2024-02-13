//Symbols in JS
 const mysym = Symbol("Key1")


 const user={
    name:"arisha chaudhary",
    [mysym] : "mykey1",
    age: 20,
    email:"arishachaudhary123@gmail.com",
    city:"hapur",
    "isLogging" : "True",
}
//  console.log(typeof user[mysym]); //-- String
 console.log(user[mysym]);
 console.log( typeof user[mysym]); //= Symbol
