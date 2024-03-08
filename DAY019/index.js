
// var a=document.querySelectorAll(".elem");
// elem.forEach(function(val){       
// });
// var a = document.querySelector("#elem1")
// var b =document.querySelector("#elem1 img")

var a = document.querySelectorAll(".elem")
elem.forEach( function(val) {
    val.addEventListener("mouseenter",function(){
        val.childNode[3].style.opacity=1
    });
    val.addEventListener("mouseleave",function(){
        val.childNode[3].style.opacity=0
    });
});


