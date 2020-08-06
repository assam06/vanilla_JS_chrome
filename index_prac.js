const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS!";

// document.title = "I own you now";
/*js는 내 html에 있는 모든 요소(태그)를 가져와서 객체로 만들 것임
객체는 console.log의 log처럼 점찍으면 쭉 나옴*/

function handleClick() {
  title.style.color = "red";
}
//handleClick이란 함수는  title.style.color를 red로 만드는거야 라는 말을 하는중
title.addEventListener("click", handleClick);
//클릭하면 handleClick 함수 불러

const age = prompt("How old are you?");

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("you cant");
}
