console.log("AHOJ, ja som content script")

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (message.type === 'color-elements') {
            colorElements(message.color, message.elementName)
        }
        if(message.type === 'function-name'){
            if(message.functionName === 'getAllText'){
                sendResponse(getAllText())
            }
            if(message.functionName === 'sortText'){
                sendResponse(sortText())
            }
            if(message.functionName === 'noDuplicateElements'){
                sendResponse(noDuplicateElements())
            }
            if(message.functionName === 'numberOfRepetitions'){
                sendResponse(numberOfRepetitions())
            }
        }
        
    }
)

function colorElements (color, elementName){
    const elements = document.getElementsByTagName(elementName)
    for(let e of elements){
        e.style['background-color'] = color
    }
}

function getAllText (){
    return document.body.innerText
}

function sortText(){
    var text = document.body.innerText;
    var arrayOfStrings = text.split(" ");
    var arraySort = arrayOfStrings.sort()
    return arraySort.join("<br>")
}

function noDuplicateElements() {
    var text = document.body.innerText;
    var arrayOfStrings = text.split(" ");
    var arraySort = arrayOfStrings.sort()
    var uniq = Array.from(new Set(arraySort));
    return uniq.join("<br>");
  }

function numberOfRepetitions(){
    var text = document.body.innerText;
    var arrayOfStrings = text.split(" ");
    var arraySort = arrayOfStrings.sort()
    let result = [];
    var k = 0;
    for (var i = 0; i < arraySort.length; i++) {
        if (arraySort[i] !== arraySort[i-1]){
        var duplicateCount = 1;
        for (var j = i + 1; j < arraySort.length; j++) {
          if (arraySort[i] === arraySort[j]) {
            duplicateCount++;
          }
        }
        result[k] = arraySort[i] + " (" + duplicateCount + ")";
        k++;
    }
    }
    return result.join("<br>")
}