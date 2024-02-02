/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");


buttonEl.addEventListener("click", function () {
    let inputValue = "";
    Number(inputValue = inputEl.value)
    let theLength = "";
    let resultFeet = inputValue * 3.281;
    let resultMeters = inputValue / 3.281;
    theLength = `${inputValue} meters = ${resultFeet.toFixed(3)} feet | ${inputValue} feet = ${resultMeters.toFixed(3)} meters`
    lengthEl.textContent += theLength;

    let theVolume = "";
    let resultGallons = inputValue * 0.264;
    let resultLiters = inputValue / 0.264;
    theVolume = `${inputValue} liters = ${resultGallons.toFixed(3)} gallons | ${inputValue} gallons = ${resultLiters.toFixed(3)} liters`
    volumeEl.textContent += theVolume;

    theMass = "";
    let resultPounds = inputValue * 2.204;
    let resultKilos = inputValue / 2.204;
    theMass = `${inputValue} kilos = ${resultPounds.toFixed(3)} pounds | ${inputValue} pounds = ${resultKilos.toFixed(3)}`
    massEl.textContent += theMass;

})

function clearContent() {
    lengthEl.value = "";
    volumeEl.value = "";
    massEl.value = "";
}





