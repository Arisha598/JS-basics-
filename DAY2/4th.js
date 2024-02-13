//array in object
const user = [
    {
        id : 1,
        email:"sm@gmail.com",
        name:"ashu"

    },
    {
        one : "asd",
        two:"qse",
        sub:"coa"

    },
    {
        heat : "ass",
        cold: "wrt"
    },
]
user[1].name
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasownProperty(email));//-->true or false