const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  //텍스트를 칠할거면 폼을 숨겨야해 -> 얘가 이름이 뭐냐고 물어보는 폼이잖아
  form.classList.remove(SHOWING_CN);
  //showing클래스를 지워
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    //유저가 없을 때
  } else {
    //유저가 있을 때
    paintGreeting(currentUser);
    //paintGreeting 함수를 부를거야 로컬스토리지에서 가져온 텍스트랑 같이
  }
}

function init() {
  loadName();
}

init();
