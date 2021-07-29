var btnTranslate = document.querySelector("#btn-translate") 
var txtInput = document.querySelector("#txt-input")
var divOutput = document.querySelector("#output")

console.log(btnTranslate)
console.log(txtInput)
console.log(divOutput)


const text1 = "I am ShaktiMan"
const text2 = "I am IronMan"
const text3 = "I am superman"

function constructUrl(text){
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + text 
}


btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked")
    console.log("input", txtInput.value)
    divOutput.innerText = "Anurag kumar " + txtInput.value

})