// var a = document.querySelector("h1")
// console.log(a);

// var a=document.querySelector("h1")
// a.innerHTML="Changed in HTML"


// var a=document.querySelector("h1")
// a.style.color="blue"



//add eventListener

// var a = document.querySelector("h1")
// a.addEventListener("click",function(){
//     console.log("arisha chaudhary");
// })

// var a=document.querySelector(".box1")
// a.addEventListener("click",function(){
//     a.style.backgroundColor="red"
// })
var a = document.querySelector(".bulb")
var b=document.querySelector("button")
var flag =0
b.addEventListener("click",function(){
    if(flag == 0){
        a.style.backgroundColor= "goldenrod"
        flag =1
    }
    else{
        a.style.backgroundColor= "transparent"
        flag=0
    }

})