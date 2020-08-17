const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  imgNumber.src = `/images/${imgNumber + 1}.jpg`;
  //2.  +1 하는 이유는 img넘버를 0 줄 수 도 있으니까~
  body.appendChild(image);
  imgNumber.addEventListener("loadend");
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  //1. 원하는 숫자를 사용하면 워하는 대로 바뀜.
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
