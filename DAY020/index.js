
const a = document.querySelector('.box')
const b = document.querySelector('.main')

a.addEventListener('click',function(e){
    console.log('aridhs');
    if(e.target.class == box1){
        b.style.backgroundColor = "green"
    }
   
})

