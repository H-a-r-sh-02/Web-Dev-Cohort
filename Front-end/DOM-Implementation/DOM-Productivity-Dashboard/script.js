const API_KEY = "f85e569ac635470e80c171006262801";
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
function dailyPlanner() {
  var dayContainer = document.querySelector(".dailyContainer");
  var dayData = JSON.parse(localStorage.getItem("dayData")) || {};
  var hours = Array.from(
    { length: 18 },
    (elem, idx) => `${6 + idx}:00 - ${7 + idx}:00`,
  );
  var wholeDaySum = "";

  hours.forEach((elem, idx) => {
    var saveData = dayData[idx] || "";
    wholeDaySum += `<div class="day">
                    <p>${elem}</p>
                    <input id=${idx} type="text" placeholder="..." value=${saveData}>
                </div>`;
  });
  dayContainer.innerHTML = wholeDaySum;

  var dayInputs = document.querySelectorAll(".dailyContainer .day input");

  dayInputs.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayData[elem.id] = elem.value;
      localStorage.setItem("dayData", JSON.stringify(dayData));
    });
  });
}
function motivation() {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var date = new Date();
  document.querySelector(".dayBox .day").innerText = days[date.getDay()];
  document.querySelector(".dayBox .date").innerText = date.getDate();
  async function quotes() {
    try {
      const res = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
      const data = await res.json();
      document.querySelector(".lower p").innerText = data.quote;
      document.querySelector(".lower h2").innerText = `${data.author}~`;
    } catch (err) {
      console.error(err);
    }
  }
  quotes();
}
function pomodoro() {
  var start = document.querySelector(".pomo-card .controls .start-timer");
  var pause = document.querySelector(".pomo-card .controls .pause-timer");
  var reset = document.querySelector(".pomo-card .controls .reset-timer");
  var session = document.querySelector(".pomo-timer .session");

  var isWorkSession = true;
  let timerInterval = null;

  let totalSecond = 25 * 60;
  let timer = document.querySelector(".pomo-timer .pomo-card h1");

  function upDateTimer() {
    let minutes = Math.floor(totalSecond / 60);
    let seconds = totalSecond % 60;

    timer.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  function startTimer() {
    clearInterval(timerInterval);
    if (isWorkSession) {
      timerInterval = setInterval(() => {
        if (totalSecond > 0) {
          totalSecond--;
          upDateTimer();
        } else {
          isWorkSession = !isWorkSession;
          clearInterval(timerInterval);
          timer.innerHTML = "05:00";
          session.innerText = "Break Session";
          totalSecond = 5 * 60;
        }
      }, 1000);
    } else {
      timerInterval = setInterval(() => {
        if (totalSecond > 0) {
          totalSecond--;
          upDateTimer();
        } else {
          isWorkSession = !isWorkSession;
          clearInterval(timerInterval);
          timer.innerHTML = "25:00";
          session.innerText = "Work Session";
          totalSecond = 25 * 60;
        }
      }, 1000);
    }
  }
  function pauseTimer() {
    clearInterval(timerInterval);
  }
  function resetTimer() {
    clearInterval(timerInterval);
    totalSecond = 25 * 60;
    upDateTimer();
  }

  start.addEventListener("click", startTimer);
  pause.addEventListener("click", pauseTimer);
  reset.addEventListener("click", resetTimer);
}
function dashBoard() {
var header = document.querySelector('header');
var cityName = document.querySelector('.header1 h1');
var dayTime = document.querySelector('.header1 h2');
var temp = document.querySelector('.header2 h2');
var weather = document.querySelector('.header2 .btmDetail h3');
let bottomDetail = document.querySelectorAll('.header2 .btmDetail .desc h3');
var isDay = document.querySelector('.header1 h3');
var isDayNight = ["🌙 Night", "🌞 Day"];
var weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date = new Date();
var day = weeks[date.getDay()];
var backgrounds = ["https://images.unsplash.com/photo-1672037278142-9b7d7aa83309?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://media.istockphoto.com/id/1362792955/photo/napa-valley-ca.jpg?s=1024x1024&w=is&k=20&c=mKVAuZ4fGmJkUEWHTWn1d3YY5zvlKo8E-gbDKS7pojE="]

async function weatherApiCall() {
  var response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=katni, India`,
  );
   var data = await response.json();
   console.log(data);
   header.style.backgroundImage = `url(${backgrounds[data.current.is_day]})`;
   cityName.innerText = data.location.name;
   isDay.innerText = `${isDayNight[data.current.is_day]}`;
   dayTime.innerText = `${day}, ${date.getHours() == 0 ? 12 : date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`;
   temp.innerText = `${data.current.temp_c}`;
   weather.innerText = `${data.current.condition.text}`;
   bottomDetail[0].innerText = `Precipitation: ${data.current.precip_mm}%`
   bottomDetail[1].innerText = `Humidity: ${data.current.humidity}%`
   bottomDetail[2].innerText = `Wind: ${data.current.wind_kph} km/h`;
}
weatherApiCall();
}
openCards();
todo();
dailyPlanner();
motivation();
pomodoro();
dashBoard();

