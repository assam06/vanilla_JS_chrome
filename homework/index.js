const form = document.querySelector("form"),
  toDoInput = form.querySelector("input"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list");

const PD_LS = "pending",
  FS_LS = "finished";

const pending = [];

function savePending() {
  localStorage.setItem(PD_LS, JSON.stringify(pending));
}

function addTask(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  const newId = pending.length + 1;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  pendingList.appendChild(li);

  const pendingObj = {
    text: text,
    id: newId,
  };
  pending.push(pendingObj);
  savePending();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  addTask(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PD_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadToDos);
    parsedToDos.forEach(function (pending) {
      addTask(pending.text);
    });
  }
}

function init() {
  loadToDos();
  form.addEventListener("submit", handleSubmit);
}

init();
