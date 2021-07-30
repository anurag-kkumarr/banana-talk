var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var divOutput = document.querySelector("#output")

console.log(btnTranslate)
console.log(txtInput)
console.log(divOutput)

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("clicked")
    console.log("input", txtInput.value)
    // divOutput.innerText = "Anurag kumar " + txtInput.value
    var inputText = txtInput.value

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            divOutput.innerText = translatedText;
        })
        .catch(errorHandler)

})