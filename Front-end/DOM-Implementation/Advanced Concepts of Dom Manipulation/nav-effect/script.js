let nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', ()=>{
    let scrollTop = document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        nav.style.top = "-100px";
    }
    else{
        nav.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
