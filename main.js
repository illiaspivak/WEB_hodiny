import {TreeFrog} from './classes/tree-frog.js'

let rosinka;
let contentScriptTabId;
chrome.runtime.sendMessage(
    {type: 'extension-loaded'},//sprava - objekt
    
    (response) =>{
        contentScriptTabId = response.contentScriptTabId
        rosinka = new TreeFrog("Rosinka", 5, "green", "F", contentScriptTabId)
        rosinka.myTabId()
    }
)


function getCurrentTime(){
    const currentTime = new Date();
    const timeToShow = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    return timeToShow;
}

function getCurrentUTC(){
    const currentTime = new Date();
    const timeToShow = currentTime.getUTCHours() + ":" + currentTime.getUTCMinutes() + ":" + currentTime.getUTCSeconds();
    return timeToShow;
}


function setHTML(elementId, callback){
    document.getElementById(elementId).innerHTML = callback();
}

function setMainHeader(){
    setHTML("mainHeader", () => "Vitajte v nasom rozsireni");
}
//api_key=SPjlS8eFGYnrt0r3tJZWE3eHRdr0685C&q=
function fetchGIF(word){
    return new Promise((resolve, reject) => {
        fetch("https://api.giphy.com/v1/gifs/search?" + word + "&limit=25&offset=0&rating=g&lang=en")
        .then(resp => resp.json())
        .then(json => {
            if (json.data.length > 0) {
                const imgIndex = Math.floor(Math.random() * (json.data.length + 1));
                resolve(json.data[imgIndex].images.downsized_medium.url);
            }
            reject(new Error("Nie su gifka pre dane slovo"));
        })
        .catch(error => reject(error));
    });
    
}

setInterval(() => setHTML("timeUp", getCurrentUTC), 1000);
setInterval(() => setHTML("timeDown",getCurrentTime), 1000);

setTimeout(setMainHeader,3000);
console.log("Prve vlakno");

let gifElement = document.getElementById("gif");
let promise = fetchGIF("sunny")
console.log(promise);
promise.then(src => gifElement.src = src)
console.log(promise);
promise.catch(error => console.log(error));
console.log(promise);

const myPromise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
    
        const randomNumber = Math.random();
        if(randomNumber >= 0.5){
            reject(new Error("Cislo viac nez 0.5"))
        }else{
            resolve(randomNumber)
        }
    }, 5000);
});


myPromise1.then(result => console.log(result), error => console.log("skus znova"))






