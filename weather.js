const weather = document.querySelector(".js-weather");
const API_KEY = "8ffa056b63c82740b903083f19c16450";
const COORDS = "coords";

//6. 날씨를 구하는 함수, 그리고 이걸 handleGeoSuccess에서 불러줄거야
function getWeather(lat, lng) {
  // 7. 데이터를 얻는건 간단해, fetch를 써주면 됨
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
  //8. json데이터 받을거니까 변수이름 json이라 지음.
}

//5. 그리고 위치를 저장해야지
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//3. 좌표를 성공적으로 가져올 때 처리하는 함수
function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // 4. tip; JS의 객채{obj}에 변수의 이름과 객체의 key이름 같게 할때는
    latitude,
    longitude,
    /* latitude: latitude, 
longitude: longitude, 얘네들과 같은 의미임*/
  };
  saveCoords(coordsObj);
  //6-2
  getWeather(latitude, longitude);
}

//3-2 실패할때 갖고오는 함수
function handleGeoErro() {
  console.log("cant access geo locaiton");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoErro);
  //2. geolocation은 함수를 갖고 있음. getCurrentPosition은 두개의
  //requirement를 갖고있다.
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //get weather
    const parsedCoords = JSON.parse(loadCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
