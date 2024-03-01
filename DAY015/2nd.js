//filter

const value =[1,2,3,4,5,6,7,8,9,0,12]
 const nums = value.filter((value) => value > 5)
console.log(nums);




// const value =[1,2,3,4,5,6,7,8,9,0,12]
value.forEach((num)=>{
    if(num > 5){
        console.log(num);
        num=num+1;
    }

})
