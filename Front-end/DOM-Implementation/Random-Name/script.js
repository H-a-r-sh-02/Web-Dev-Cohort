let btn = document.querySelector('button');
var arr = ["Harsh", "Ritika", "Shivani", "Siddharth", "Virendra", "Lalit", "Hridiyansh", "Khushi", "Mehak", "Jai", "MOhbal", "Kushal", "Maharaj", "Pali"];

btn.addEventListener('click', function(){
    var randomName = Math.floor(Math.random()*arr.length);
    console.log(arr[randomName]);
})
