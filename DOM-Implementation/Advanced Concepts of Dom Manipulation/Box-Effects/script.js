let box = document.querySelector('#box');
let h1 = document.querySelector('h1');
box.addEventListener('dblclick', function(){
    // console.log("kuch hua");
   let interval = setInterval(function(){
        h1.style.opacity = 1;
    },100);
    setTimeout(()=>{
        clearInterval(interval);
        h1.style.opacity = 0;
    },1000);
});