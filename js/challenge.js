const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const pause = document.getElementById('pause')
const counter = document.getElementById('counter')
const heart = document.getElementById('heart');
const likes = document.getElementsByClassName('likes');

let count = 0;
let countingTimer = setInterval(incrementCounter, 1000);

function incrementCounter(){
    count++
    counter.textContent = count;
}
function decrementCounter(){
    count--
    counter.textContent = count;
}
function likedList() {
    const newList = document.createElement("li");
    newList.textContent = `${counter.textContent} new likes`;
    document.querySelector('.likes').append(newList)
}
function pauseCounter() {
    //pause the counter
    clearInterval(countingTimer);
    //disable all other buttons (plus, minus, heart)

    //switch label from "pause" to "resume"
    pause.textContent = "resume"
}
function restartCounter() {
   if (pause.textContent = "resume"){
       console.log("resumed")
   }
}
plus.addEventListener("click", incrementCounter)
minus.addEventListener("click", decrementCounter)
heart.addEventListener("click", likedList)
pause.addEventListener("click", pauseCounter)
pause.addEventListener("click", restartCounter)

