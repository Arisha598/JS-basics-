//Scope-resolution
//chota badhai sai ice-cream mang skata hai:

function one(){
    const username = "Arisha"
    function two(){
        const email = "arisha123@gmail.com"
        console.log(username);
    }
    // console.log(email);
    two()
}
one()
