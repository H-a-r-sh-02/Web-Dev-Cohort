let btn = document.querySelector('button');
let h5 = document.querySelector('h5');

var flag = 0;
btn.addEventListener('click', ()=>{
  if(flag == 0){
   h5.innerText = "Adding..."
   h5.style.color = "gold";
   setTimeout(()=>{
    h5.innerText = "Friends..🎉";
    h5.style.color = "green";
    btn.innerText = "Added";
    btn.style.backgroundColor = "grey";
   },2000);
   flag = 1;
  }
  else{
   h5.innerText = "Stranger";
   h5.style.color = "red";
   btn.innerText = "Add Friend";
   btn.style.backgroundColor = "#0095f6";
   flag = 0;
   }
});