function convert(){

const covert = Number(document.getElementById("enternum").value)
const inch = covert/2.54

const result = document.getElementById("result")

result.innerHTML=inch.toFixed(2) + "inches";


}
convert()