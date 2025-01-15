let timeInterval;
let timer = document.querySelector("#timer");
function getTimeInterval() {
 timeInterval = localStorage.getItem("time");
}

let countdownInterval;
function startCountdown() {
countdownInterval = setInterval(()=> {
    timer.innerText = timeInterval--;
    // console.log(timeInterval);
    if(parseInt(timeInterval) === 0) {
        clearInterval(countdownInterval);
       setTimeout(() => {
        gameoverScreen.style.transition = "0.3s";
        gameoverScreen.style.opacity = "1";
        gameoverScreen.style.transform = "scale(1)";
        gameoverScreen.style.visibility = "visible";
        timer.innerText = "0";
        question.style.visibility = "hidden";
        option01.style.visibility = "hidden";
        option02.style.visibility = "hidden";
        option03.style.visibility = "hidden";
        option04.style.visibility = "hidden";
        checkBtn.style.visibility = "hidden";
        optionA.style.visibility = "hidden";
        optionB.style.visibility = "hidden";
        optionC.style.visibility = "hidden";
        optionD.style.visibility = "hidden";
        option1.style.visibility = "hidden";
        option2.style.visibility = "hidden";
        option3.style.visibility = "hidden";
        option4.style.visibility = "hidden";
       },1000);
    }
},1000);
}
function stopTimer() {
 clearInterval(countdownInterval);
}

pointVal.innerText = localStorage.getItem("point");
pointValue.innerText = localStorage.getItem("point");
lifelineValue.innerText = localStorage.getItem("lifelines");
answerValue.innerText = localStorage.getItem("showAnswers");
plusTimeVal.innerText = localStorage.getItem("plusTime");
function buyLifeline() {
 if(parseInt(pointValue.innerText) >= 2) {
 lifelineValue.innerText = parseInt(lifelineValue.innerText) + 1;
 localStorage.setItem("lifelines",parseInt(lifelineValue.innerText));
 lifelineVal.innerText = parseInt(lifelineValue.innerText);
 
 pointValue.innerText = parseInt(pointValue.innerText) - 2;
 pointVal.innerText = parseInt(pointValue.innerText);
 localStorage.setItem("point",parseInt(pointValue.innerText));
  
 } else {
  earnPoints.innerText = "Earn Points";
  earnPoints.style.visibility = "visible";
  setTimeout(() => {
   earnPoints.style.visibility = "hidden";
  },1000);
 }
 if(clickedSound) {
 clickedSound.play();
 }
 if(clickSound) {
  clickSound.play();
 }
}
function buyShowAnswers() {
 if(parseInt(pointValue.innerText) >= 4) {
 answerValue.innerText = parseInt(answerValue.innerText) + 1;
 answerVal.innerText = parseInt(answerValue.innerText);
 
 pointValue.innerText = parseInt(pointValue.innerText) - 4;
 pointVal.innerText = parseInt(pointValue.innerText);
 
 localStorage.setItem("point",parseInt(pointValue.innerText));
 localStorage.setItem("showAnswers",parseInt(answerValue.innerText));
 } else {
  earnPoints.innerText = "Earn Points";
  earnPoints.style.visibility = "visible";
  setTimeout(() => {
   earnPoints.style.visibility = "hidden";
  },1000);
 }
 if(clickedSound) {
 clickedSound.play();
 }
 if(clickSound) {
  clickSound.play();
 }
}
function buySkips() {
 if(parseInt(pointValue.innerText) >= 4) {
 skipVal.innerText = parseInt(skipVal.innerText) + 1;
  skipValue.innerText = parseInt(skipVal.innerText);
 
 pointValue.innerText = parseInt(pointValue.innerText) - 4;
 pointVal.innerText = parseInt(pointValue.innerText);
 
 localStorage.setItem("point",parseInt(pointValue.innerText));
 localStorage.setItem("skips",parseInt(skipVal.innerText));
 } else {
  earnPoints.innerText = "Earn Points";
  earnPoints.style.visibility = "visible";
  setTimeout(() => {
   earnPoints.style.visibility = "hidden";
  },1000);
 }
 if(clickedSound) {
 clickedSound.play();
 }
 if(clickSound) {
  clickSound.play();
 }
}
function addTime() {
 if(parseInt(pointValue.innerText) >= 2) {
  plusTimeVal.innerText = parseInt(plusTimeVal.innerText) + 1;
  localStorage.setItem("plusTime",parseInt(plusTimeVal.innerText));
  plusTimeValue.innerText = parseInt(plusTimeVal.innerText);
  
  pointValue.innerText = parseInt(pointValue.innerText) - 2;
  pointVal.innerText = parseInt(pointValue.innerText);
  localStorage.setItem("point",parseInt(pointValue.innerText));
 } else {
  earnPoints.innerText = "Earn Points";
  earnPoints.style.visibility = "visible";
  setTimeout(() => {
   earnPoints.style.visibility = "hidden";
  },1000);
 }
 if(clickedSound) {
 clickedSound.play();
 }
 if(clickSound) {
  clickSound.play();
 }
}
