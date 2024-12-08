let startbtn = document.querySelector("#start");
let optionbtn = document.querySelector("#option");
let settingstbtn = document.querySelector("#settings");
let correctSound = document.querySelector("#correct");
let wrongSound = document.querySelector("#wrong");
let clickSound = document.querySelector("#click");
let backgroundSound = document.querySelector("#backgroundMusic");
let instruction = document.querySelector("#instruction");
let closebtn = document.querySelector("#close");
let heading2 = document.querySelector("#heading2");
let lifelineValue = document.querySelector("#lifelinevalue");
let name = document.querySelector("#name");
let nameinput = document.querySelector("#nameinput");
let user = document.querySelector("#user");
let background = document.querySelector("#background");
let settingBlock = document.querySelector("#settingBlock");
let closebtn2 = document.querySelector("#close2");
let body = document.querySelector("body");
let container2 = document.querySelector("#container2");
let btn2 = document.querySelector("#btn2");
let close3 = document.querySelector("#close3");
let close4 = document.querySelector("#close4");
let aboutusBlock = document.querySelector("#aboutusBlock");
let close5 = document.querySelector("#close5");
let profileBlock = document.querySelector("#profileBlock");
let playerName = document.querySelector("#playerName");
let msg = document.querySelector("#msg");
let shopBlock = document.querySelector("#shopBlock");
let close6 = document.querySelector("#close6");
let pointValue = document.querySelector("#pointValue");
let pointVal = document.querySelector("#pointVal");
let answerValue = document.querySelector("#answerValue");
let btn3 = document.querySelector("#btn3");
let container3 = document.querySelector("#container3");
let level = document.querySelector("#level");
let earnPoints = document.querySelector("#earnPoints");
let skipValue = document.querySelector("#skipValue");
let plusTimeValue = document.querySelector("#plusTimeValue");

let points = 10;
let lifeline = 2;
let showAnswer = 2;
let select = "Easy";
let timeInterval = 40;
let skips = 2;
let plusTime = 2;
let saveInterval;
let backgroundMusic = "off";
saveTime();

let mode = "on";
let modeTwo = "on";
localStorage.setItem("point",points);
localStorage.setItem("lifelines",lifeline);
localStorage.setItem("showAnswers",showAnswer);
localStorage.setItem("skips",skips);
localStorage.setItem("plusTime",plusTime);


setInterval(() => {
pointVal.innerText = localStorage.getItem("point");
pointValue.innerText = localStorage.getItem("point");
lifelineValue.innerText = localStorage.getItem("lifelines");
answerValue.innerText = localStorage.getItem("showAnswers");
skipValue.innerText = localStorage.getItem("skips");
plusTimeValue.innerText = localStorage.getItem("plusTime");
    if(backgroundMusic === "on") {
        backgroundSound.play();
    }
},1000);

function option() {
    optionBlock.style.visibility = "visible";
    if(clickSound) {
    clickSound.play();
    }
}
function closeOptions() {
    optionBlock.style.visibility = "hidden";
    select = level.value;
    console.log(select);
    updateTime();
    if(clickSound) {
    clickSound.play();
    }
}
function updateTime() {
if(select === "Easy") {
    timeInterval = 40;
    } else if(select === "Mediam") {
    timeInterval = 25;
    } else {
    timeInterval = 15;
    }
    saveTime();
}
function saveTime() {
    saveInterval = localStorage.setItem("time",timeInterval);
}
function settings() {
    settingBlock.style.visibility = "visible";
    btn2.style.transition = "0.5s";
    btn3.style.transition = "0.5s";
    if(clickSound) {
    clickSound.play();
    }
}
function closeSettings() {
    settingBlock.style.visibility = "hidden";
    btn2.style.transition = "0s";
    btn3.style.transition = "0s";
    if(clickSound) {
    clickSound.play();
    }
}
function start() {
    window.location.href = "QuizGame-ByAnsh.html";
    if(clickSound) {
    clickSound.play();
    }
}
function howToPlay() {
    instruction.style.visibility = "visible";
    instruction.style.transitionDelay = "0.3s";
    if(clickSound) {
    clickSound.play();
    }
}
function closeInstruction() {
    instruction.style.visibility = "hidden";
    if(clickSound) {
    clickSound.play();
    }
}
function aboutus() {
    aboutusBlock.style.visibility = "visible";
    if(clickSound) {
    clickSound.play();
    }
}
function closeAboutus() {
    aboutusBlock.style.visibility = "hidden";
    if(clickSound) {
    clickSound.play();
    }
}
function shop() {
    shopBlock.style.visibility = "visible";
    if(clickSound) {
    clickSound.play();
    }
}
function closeShop() {
    shopBlock.style.visibility = "hidden";
    if(clickSound) {
    clickSound.play();
    }
}
function profile() {
    profileBlock.style.visibility = "visible";
    if(clickSound) {
    clickSound.play();
    }
}
function closeProfile() {
    profileBlock.style.visibility = "hidden";
    if(clickSound) {
    clickSound.play();
    }
}
function resetGame() {
    let points = 10;
    let lifeline = 2;
    let showAnswer = 2;
    let skips = 2;
    let plusTime = 2;
    localStorage.setItem("point",points);
    localStorage.setItem("lifelines",lifeline);
    localStorage.setItem("showAnswers",showAnswer);
    localStorage.setItem("skips",skips);
    localStorage.setItem("plusTime",plusTime);

    pointVal.innerText = localStorage.getItem("point");
    pointValue.innerText = localStorage.getItem("point");
    lifelineValue.innerText = localStorage.getItem("lifelines");
    answerValue.innerText = localStorage.getItem("showAnswers");
    skipValue.innerText = localStorage.getItem("skips");
    plusTimeValue.innerText = localStorage.getItem("plusTime");
    clickSound.play();
}
function continuebtn() {
    
    if(nameinput.value === "") {
        msg.style.visibility = "visible";
        setTimeout(()=> {
        msg.style.visibility = "hidden";
        },1000);
    } else {
        name.innerText = nameinput.value.toLowerCase();
        localStorage.setItem("username",name.innerText);
        playerName.innerText = nameinput.value;
        user.style.visibility = "hidden";
        background.style.visibility = "hidden";
        user.style.transitionDelay = "0.3s";
        background.style.transitionDelay = "0.3s";
        msg.style.visibility = "hidden";
        select = level.value;
        console.log(select);
        backgroundSound.play();
        backgroundMusic = "on";
    }
    if(clickSound) {
    clickSound.play();
    }
}
function btn() {
    if(mode === "on") {
        container2.style.backgroundColor = "white";
        mode = "off";
        btn2.style.transform = "translateX(0px)";
        clickSound = clickSound.remove();
        if(clickSound) {
        clickSound.play();
        }
    } else {
        container2.style.backgroundColor = "skyblue";
        mode = "on";
        btn2.style.transform = "translateX(70px)";
        clickSound = document.createElement("audio");
        clickSound.setAttribute("src","Sound Effects/Click.mp3");
        if(clickSound) {
        clickSound.play();
        }
    }
}
function btnTwoSettings() {
    if(modeTwo === "on") {
        container3.style.backgroundColor = "white";
        modeTwo = "off";
        btn3.style.transform = "translateX(0px)";
        backgroundSound.pause();
        backgroundSound = backgroundSound.remove();
        backgroundMusic = "off";
        if(clickSound) {
        clickSound.play();
        }
        console.log("in if");
    } else {
        container3.style.backgroundColor = "skyblue";
        modeTwo = "on";
        btn3.style.transform = "translateX(70px)";
            backgroundSound = document.createElement("audio");
            backgroundSound.setAttribute("src","Sound Effects/Game Background Music.mp3");
            backgroundSound.setAttribute("loop","true");
            backgroundSound.play();
            backgroundMusic = "on";
        if(clickSound) {
        clickSound.play();
        }
        console.log("in else");
    }
}
function buyLifeline() {
    if(parseInt(pointValue.innerText) >= 2) {
 lifelineValue.innerText = parseInt(lifelineValue.innerText) + 1;
 localStorage.setItem("lifelines",lifelineValue.innerText);
 pointValue.innerText = parseInt(pointValue.innerText) - 2;
 pointVal.innerText = pointValue.innerText;
 localStorage.setItem("point",pointValue.innerText);
    } else {
        earnPoints.style.visibility = "visible";
        setTimeout(() => {
            earnPoints.style.visibility = "hidden";
        },1000);
    }
 if(clickSound) {
  clickSound.play();
 }
}
function buyShowAnswers() {
    if(parseInt(pointValue.innerText) >= 4) {
 answerValue.innerText = parseInt(answerValue.innerText) + 1;
 localStorage.setItem("showAnswers",answerValue.innerText);
 pointValue.innerText = parseInt(pointValue.innerText) - 4;
 pointVal.innerText = parseInt(pointValue.innerText);
 localStorage.setItem("point",parseInt(pointValue.innerText));
    } else {
        earnPoints.style.visibility = "visible";
        setTimeout(() => {
            earnPoints.style.visibility = "hidden";
        },1000);
    }
 if(clickSound) {
  clickSound.play();
 }
}
function buySkips() {
 if(parseInt(pointValue.innerText) >= 4) {
 skipValue.innerText = parseInt(skipValue.innerText) + 1;
 
 pointValue.innerText = parseInt(pointValue.innerText) - 4;
 pointVal.innerText = parseInt(pointValue.innerText);
 
 localStorage.setItem("point",parseInt(pointValue.innerText));
 localStorage.setItem("skips",parseInt(skipValue.innerText));
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
  plusTimeValue.innerText = parseInt(plusTimeValue.innerText) + 1;
  localStorage.setItem("plusTime",parseInt(plusTimeValue.innerText));
  
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