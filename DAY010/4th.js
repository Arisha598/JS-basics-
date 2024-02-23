
const userLoggedIn = true
const Debitcard = false
if(userLoggedIn && Debitcard){
    console.log("Allow to shopping");
}
else{
    console.log("not allow to shopping");
}

//method-02
const userLoggedIns = true
const userLoggedEmail = false
if(userLoggedIns || userLoggedEmail){
    console.log("allow to acess");
}