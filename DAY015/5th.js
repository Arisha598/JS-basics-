//reduce

const value =[1,2,3]
const nv=value.reduce(function(acc,currval){
    console.log(`acc:${acc} and currvalue:${currval}`);
    return acc + currval;
},0)
console.log(nv);


//arrow-function

const val=[1,2,3]
const nc = val.reduce((acc,currval)=> acc+currval)
console.log(nc);