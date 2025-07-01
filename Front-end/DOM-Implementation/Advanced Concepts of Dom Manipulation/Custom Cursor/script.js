var box = document.querySelector('#box');
var smlbox = document.querySelector('#smlbox');
// var emoji = [];

var mouseEnter = box.addEventListener('mouseenter', function(details){
    let mousePosition1 = [details.clientX, details.clientY];
    console.log(mousePosition1)
});
// var mouseMove = box.addEventListener('mousemove', function(details){
//     smlbox.style.left = `${details.clientX}px`;
//     smlbox.style.top = `${details.clientY}px`;
// });
var mouseLeave = box.addEventListener('mouseleave', function(details){
    let mousePosition2 = [details.clientX, details.clientY];
    console.log(mousePosition2);
})