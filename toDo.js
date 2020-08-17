//0. local에서 toDo를 하나 지우고 또 html에서도 지워야함! 먼저 li부터 지워보자

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//5-1 마치 forEach에서 function 실행하듯이 각각의 item과 같이 실행될 것.
//5-1-1 true인 toDos만 return할거야 = id가 1인 경우에만!
function filterFn(toDo) {
  return toDo.id === 1;
}

//7-2 let으로 바꿔줌
let toDos = [];

//1. delete To do 만들기. 이 함수에 이벤트 만들거임
//1-2 우리는 어떤 버튼이 지워질지 알아야해 (target)
//1-3 버튼의 부모가 누군지 알아야해(parentNode)
function deleteToDo(event) {
  //2. 버튼 선언해주고
  //3. 지워야할 li인 부모 노드를 만들고
  const btn = event.target;
  const li = btn.parentNode;
  //4. toDoList가져와서
  toDoList.removeChild(li); //4-1 근데 여기까지로는 새로고침시 삭제가 안되어 있을거야, 그럼 toDo를 깨끗하게 하는걸 만들어야해/
  //5. 투두 청소 - filter에 함수 적용해서 실행
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); // 모든 toDos가 li의 id와 같지 않을 때
    //y6. string이어서 숫자로 변환해줌(parseInt)
  });
  //5-2 filterFn을 여기다 넣으면 array에 있는 모든 toDos를 통할거야(?)
  //5-3 cleanToDos와 filter가 하는 일은 filterFn이 체크가 된 아이템들의 array를 주는거야
  //7분 정도부터 이해 안가기 시작함...

  //7. 이제 toDos를 교체하면 돼
  toDos = cleanToDos; // 7-1 근데 기존 toDos가 const여서
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  //1-1 del버튼 만들때 listener만듦(event에 반응)- click하면 delete하는
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);

  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
