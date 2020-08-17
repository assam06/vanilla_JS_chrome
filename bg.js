const body = document.querySelector("body");

const IMG_NUMBER = 3;

//2.0 이미지를 가져와 보자
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  //2.  이미지 소스는 image폴더 안에 내용이겠지~  +1 하는 이유는 math함수가 넘버를 0 줄 수 도 있으니까~
  image.classList.add("bgImage");
  body.prepend(image);
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
