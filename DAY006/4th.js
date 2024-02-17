//++++++Intresting++++++

//Method-01
console.log(addone(4))
function addone(num1) {
    return num1+1
}
console.log(addone(4))

//Method-02
console.log(maths(4)) //-->Hoisting can't access before initalization
  const maths = function addtwo(num1) {
    return num1+2
}
