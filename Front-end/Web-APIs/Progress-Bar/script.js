let percent = document.querySelector('#percent');
let btn = document.querySelector('button');
let progress = document.querySelector('#progress');
let grow = 0;
btn.addEventListener('click', function(){
 let progressInterval = setInterval(function(){
    grow++;
    percent.innerHTML = `${grow}%`;
    progress.style.width = `${grow}%`;
  },50);

  setTimeout(function(){
    clearInterval(progressInterval);
    btn.innerText = "Downloaded";
    btn.style.opacity = 0.5;
  },5000);

});