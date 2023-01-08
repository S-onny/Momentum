function onGeoOk(position) {
    const lat = position.coords.latutude;
    const lon = position.coords.longitude;
    const API_KEY = a42c881552cb138cc2c2a7f3478b2af4;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
}

function onGeoError() {
    alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);