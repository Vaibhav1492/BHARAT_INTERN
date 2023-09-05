// scripts

var date = new Date();
var current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("p1").innerHTML = current_time;


// script.js
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

console.log(tempType.value)
if (degree.value === "") {
    convertBtn.setAttribute("disabled", "");
    setTimeout(() => {
        convertBtn.removeAttribute('disabled');
    }, 4000);
}


convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>"
    }, 1000);
});

function convertToCelsius() {
    let inputValue = degree.value;

    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            console.log(FahrenheitToCelsius)
            celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
        } else if (tempType.value === "kelvin") {
            const KelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
        }
    }, 1200)
}