const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 만약 초가 10보다 작으면 ? '0${seconds}'를 리턴하고 아니면 (:) seconds 그대로 리턴할거야
}
// ?는 if문 같은거 ${} 안에 들어있음.

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
