function openCards() {
  var taskCards = document.querySelectorAll(".task-card");
  var fullElem = document.querySelectorAll(".fullElem");
  var backBtn = document.querySelectorAll(".back");

  taskCards.forEach(function (taskCard) {
    taskCard.addEventListener("click", function () {
      fullElem[taskCard.id].style.display = "block";
    });
  });

  backBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElem[back.id].style.display = "none";
    });
  });
}
function todo() {
  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskArea = document.querySelector(".addTask form textarea");
  let checkBox = document.querySelector(".addTask form .mark #check");

  var currentTask = [];
  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
  }

  function renderTask() {
    let allTask = document.querySelector(".taskList");
    let sum = "";
    currentTask.forEach(function (elem, idx) {
      sum += `<div class="list">
                        <h5>${elem.task}
                            <span class=${elem.imp}>imp</span>
                        </h5>
                        <button id=${idx}>Mark as Completed</button>
                    </div>`;
    });

    allTask.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    document.querySelectorAll(".list button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push({
      task: taskInput.value,
      details: taskArea.value,
      imp: checkBox.checked,
    });
    renderTask();
    taskInput.value = "";
    taskArea.value = "";
    checkBox.checked = false;

    location.reload();
  });
}
function dailyPlanner () {
var dayContainer = document.querySelector(".dailyContainer");
var dayData = JSON.parse(localStorage.getItem('dayData')) || {};
var hours = Array.from({length:18}, (elem, idx) => `${6+idx}:00 - ${7+idx}:00`);
var wholeDaySum ='';



hours.forEach((elem, idx) => {
  var saveData = dayData[idx] || "";
  wholeDaySum += `<div class="day">
                    <p>${elem}</p>
                    <input id=${idx} type="text" placeholder="..." value=${saveData}>
                </div>`

              });
dayContainer.innerHTML = wholeDaySum;

var dayInputs = document.querySelectorAll('.dailyContainer .day input');

dayInputs.forEach(function (elem) {
  elem.addEventListener('input', function () {
    dayData[elem.id] = elem.value;
    localStorage.setItem('dayData', JSON.stringify(dayData))
  });  
});
}
function motivation () {
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
document.querySelector(".dayBox .day").innerText = days[date.getDay()];
document.querySelector(".dayBox .date").innerText = date.getDate(); 
async function quotes() {
  try {
    const res = await fetch('https://quotes-api-self.vercel.app/quote');
    const data = await res.json();
    
    document.querySelector('.lower p').innerText = data.quote;
    document.querySelector('.lower h2').innerText = `${data.author}~`;

  } catch (err) {
    console.error(err);
  }
}
quotes();
}
openCards();
todo();
dailyPlanner();
motivation ();
