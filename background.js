const images = [
    "dubrovnik.jpeg",
    "santorini.jpeg",
    "twelve_apostles.jpeg"
];

const MAX = images.length;
const chosenImage = images[Math.floor(Math.random() * MAX)];

const bgImage = document.createElement("img");
const page = document.querySelector("body");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);