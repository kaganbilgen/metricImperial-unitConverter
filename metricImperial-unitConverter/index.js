const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let unit
let lengthMetric
let volumeMetric
let massMetric
let lengthImperial
let volumeImperial
let massImperial

convertBtn.addEventListener("click", function(){
    unit = parseInt(inputEl.value) 
    lengthMetric = unit /3.281
    volumeMetric = unit /0.264
    massMetric = unit / 2.204
    lengthImperial = unit * 3.281
    volumeImperial = unit * 0.264
    massImperial = unit * 2.204   
    lengthEl.innerHTML = `
    ${unit} meters = ${lengthMetric.toFixed(3)} feet | 
    ${unit} feet = ${lengthImperial.toFixed(3)} meters`
    volumeEl.innerHTML = `
    ${unit} liters = ${volumeMetric.toFixed(3)} gallons | 
    ${unit} gallons = ${volumeImperial.toFixed(3)} liters`
    massEl.innerHTML = `
    ${unit} kilograms = ${massMetric.toFixed(3)} pounds | 
    ${unit} pounds = ${massImperial.toFixed(3)} kilograms`
})