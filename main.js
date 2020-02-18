const fontSizeRatio = 0.1;
const borderRadiusRatio = 0.02;
const shadowOffsetRatio = 0.0067;
// const yes = [];
// const no = [];
let button = document.getElementById("wellareya");

function calcScale() {
    let scalar = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    button.style.fontSize = `${scalar * fontSizeRatio}px`;
    button.style.borderRadius = `${scalar * borderRadiusRatio}px`;
    button.style.boxShadow = `${scalar * shadowOffsetRatio}px ${scalar * shadowOffsetRatio}px rgba(0, 0, 0, 0.2)`;
    button.style.display = "block";
}

function transition() {
    // let trans = Math.round(Math.random());
    // if(trans) location.href = Math.floor(Math.random() * yes.length);
    // else Math.floor(Math.random() * no.length);
    location.href = "https://youtu.be/dQw4w9WgXcQ";
}

calcScale();

addEventListener("resize", calcScale);
button.addEventListener("mouseup", transition);
button.addEventListener("touchend", transition);
