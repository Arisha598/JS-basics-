
//MAP

const map = new Map();
map.set('IN' , 'INDIA')
map.set('USA' , 'United State Of America')
map.set('FR' , 'Frencee')
map.set('BG' , 'Bengal')
console.log(map);


for (const [key,value] of map) {
    console.log(key, ':-' ,value);
    
}