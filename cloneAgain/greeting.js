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
  // input에 텍스트를 작성한 값이 자동으로 value로 되나보다

  paintGreeting(currentValue);
  //hello currentValue! 가 뜨는애

  saveName(currentValue);
  //로컬에 저장. key는  currentUser, value가 currentValue가 됨
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// 폼을 지우고
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // 유저가 없는 경우
    askForName();
  } else {
    // 유저가 있는 경우 , 로컬유저랑 같이 페인팅 함수 부름.
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
