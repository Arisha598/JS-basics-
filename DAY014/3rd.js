
//objects in map

const myobject ={
    'game1' : 'subway surf',
    'game2' : 'candy crush',
    'game3' : 'ludo'
}


// for (const [key,value] of myobject) {
//     console.log(key, ':-',value);  
// }



//in object we use forin loop

for (const key in myobject) {
    console.log(`${key} for in ${myobject[key]}`);
    
}