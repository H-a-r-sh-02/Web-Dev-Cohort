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
    console.log("Task list is empty");
  }

  function renderTask() {
    var allTask = document.querySelector(".taskList");
    var sum = "";
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
openCards();
todo();
