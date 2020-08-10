const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//1. toDos를 비어있는 array로 만들고 해야할 일을 생성했을 떄 이 array에 추가되도록 만들것임
const toDos = [];

//4. array된 toDos를 localStorage에 저장하기
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //4-1 그럼 TODOS_LS값인 toDos가 key, toDos array가 value 값으로 되겠네.
  //5. JS의 object를 string으로 바꾸는 것 추가. localStorage의 특성이야, JS의 string만 저장해
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  //3. 보기 편하게 new id 만들자, 그리고 얘네한테도 id 만들어 줄거야,
  // 그래야 나중에 버튼 클릭했을 때 어떤 li를 지워야할지 알 수 있으니까
  const newId = toDos.length + 1;

  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  //3-1 li에 id 추가
  li.id = newId;
  toDoList.appendChild(li);
  //2. toDoObject를 만들어야 해.
  const toDoObj = {
    //2-1 text라는 key에 text가 value로 올 거고
    text: text,
    // 3-2 이거 (id: toDos.length + 1) 지우고 , id: newId로 추가
    id: newId,
    // ⬆ length는 array의 element의 갯수를 알려줘. array 길이를 알려주는거지
    // 2-2 비어있는 array에 1을 더해주면 id값이 1이 되겠지
  };
  toDos.push(toDoObj);
  //2-3 toDos라는 array 안에 toDoObj를 넣음.
  //4-2 push한 이후에 호출하기 (localStorage에 저장하는 함수를)
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//7. 이 함수를 parsedToDos에 있는 것들 각각에게 실행해줄거야
//그리고 그 각각을 toDo라고 부르자, 근데 nico는 그냥 밑에 forEach에 쓸거래

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // 6. string을 obj로 바꿔주기
    //6-1 local에서 갖고온 loadToDos는 string상텐데 parse해주니까 obj로 변환돼.
    const parsedToDos = JSON.parse(loadedToDos);
    //6-1-1 그럼 이제 local에서 갖고온걸 화면에 써줘야겠지. paintToDo를 실행해야돼.
    //7-1 여기에
    parsedToDos.forEach(function (toDo) {
      //8. 그니까 각각에 대해 paintToDo 해야지. toDo.Text에 대해서
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
