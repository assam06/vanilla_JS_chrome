const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  //toDoForm의 input을 toDoinput이라 부르자(type친거 )
  toDoList = document.querySelector(".js-toDoList");

//ttoDos를 TODOS_LS라고 부르자
const TODOS_LS = "toDos";

function paintToDo(text) {
  ////버튼을 눌렀을때 생기는 작용들.
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  //submit function에서 갖고온 text(currentValue)를 넣음
  span.innerHTML = text;
  // father Element에 뭔가를 넣는것 (????)
  //span을 li안에 넣고 버튼을 li안에 넣음
  li.appendChild(delBtn);
  li.appendChild(span);
  //금방 만든 li를 toDoList에 넣는다
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault(); /*event시 Default를 막고?? */

  const currentValue = toDoInput.value;
  /*toDo에 적은 내용의 value를 currentValue라고 부르자*/
  paintToDo(currentValue); /*그리고 paintToDo를 적은내용과 함께 작동 */
  /*엔터쳐서 생성하고 삭제하고 싶을때!!  */
  toDoInput.value = ""; /*근데 이게 뭔지 모르겠다 */
}

//localStorage에서 가져올거야 toDos를
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    /* toDos가 null이면 아무것도 안 할거야 
    왜냐면 이 form은 항상 showing이어야하거든, 그리고 null이 아니면 뭘 할거야*/
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  //toDoForm은 submit하면 handleSubmit을 할거야
}

init();
