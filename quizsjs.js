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
let category = document.querySelector("#category");
let trophy1 = document.querySelector("#trophy1");
let trophy2 = document.querySelector("#trophy2");
let trophy3 = document.querySelector("#trophy3");
let trophy4 = document.querySelector("#trophy4");
let trophyValue = document.querySelector("#trophyValue");
let optionType = document.querySelector("#optionType");
let points = 10;
let lifeline = 2;
let showAnswer = 2;
let select = "Easy";
let timeInterval = 40;
let skips = 2;
let plusTime = 2;
let saveInterval;
let backgroundMusic = "off";
let isClickSound = "on";
let categoryIs = "All-Type";
let trophy = 0;
let trophyCount = 0;
let optionTypeIs = "Touch";
saveTime();

let mode = "on";
let modeTwo = "on";
localStorage.setItem("point",points);
localStorage.setItem("lifelines",lifeline);
localStorage.setItem("showAnswers",showAnswer);
localStorage.setItem("skips",skips);
localStorage.setItem("plusTime",plusTime);
localStorage.setItem("category",categoryIs);
localStorage.setItem("trophy",trophy);
localStorage.setItem("optionType",optionTypeIs);


setInterval(() => {
    pointVal.innerText = localStorage.getItem("point");
    pointValue.innerText = localStorage.getItem("point");
    lifelineValue.innerText = localStorage.getItem("lifelines");
    answerValue.innerText = localStorage.getItem("showAnswers");
    skipValue.innerText = localStorage.getItem("skips");
    plusTimeValue.innerText = localStorage.getItem("plusTime");
    trophy = parseInt(localStorage.getItem("trophy"));
    if(trophy === 1) {
        if(trophy1.style.opacity != 1) {
        trophy1.style.opacity = "1";
        trophyValue.innerText = ++trophyCount;
        }
    }
    if(trophy === 2) {
        if(trophy2.style.opacity != 1) {
        trophy2.style.opacity = "1";
        trophyValue.innerText = ++trophyCount;
        }
    }
    if(trophy === 3) {
        if(trophy3.style.opacity != 1) {
        trophy3.style.opacity = "1";
        trophyValue.innerText = ++trophyCount;
        }
    }
    if(trophy === 4) {
        if(trophy4.style.opacity != 1) {
        trophy4.style.opacity = "1";
        trophyValue.innerText = ++trophyCount;
        }
    }
    if(backgroundMusic === "on") {
        backgroundSound.play();
    }
},1000);

optionBlock.style.transform = "scale(0.6)";
settingBlock.style.transform = "scale(0.6)";
instruction.style.transform = "scale(0.6)";
aboutusBlock.style.transform = "scale(0.6)";
shopBlock.style.transform = "scale(0.6)";
profileBlock.style.transform = "scale(0.6)";

function option() {
    optionBlock.style.transition = "0.3s";
    optionBlock.style.opacity = "1";
    optionBlock.style.transform = "scale(1)";
    optionBlock.style.visibility = "visible";
    if(clickSound) {
    clickSound.play();
    }
}
function closeOptions() {
    optionBlock.style.transform = "scale(0.6)";
    optionBlock.style.opacity = "0";
    optionBlock.style.visibility = "hidden";
    select = level.value;
    console.log(select);
    updateTime();
    updateCategory();
    if(isClickSound === "on") {
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
function updateCategory() {
    categoryIs = category.value;
    localStorage.setItem("category",categoryIs);
    console.log(categoryIs);
}
function settings() {
    settingBlock.style.transition = "0.3s";
    settingBlock.style.opacity = "1";
    settingBlock.style.transform = "scale(1)";
    settingBlock.style.visibility = "visible";
    btn2.style.transition = "0.5s";
    btn3.style.transition = "0.5s";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function closeSettings() {
    settingBlock.style.transform = "scale(0.6)";
    settingBlock.style.opacity = "0";
    settingBlock.style.visibility = "hidden";
    btn2.style.transition = "0s";
    btn3.style.transition = "0s";
    optionTypeIs = optionType.value;
    localStorage.setItem("optionType",optionTypeIs);
    console.log(optionTypeIs);
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function start() {
    window.location.href = "QuizGame-ByAnsh.html";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function howToPlay() {
    instruction.style.transition = "0.3s";
    instruction.style.opacity = "1";
    instruction.style.transform = "scale(1)";
    instruction.style.visibility = "visible";
    // instruction.style.transitionDelay = "0.3s";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function closeInstruction() {
    instruction.style.transform = "scale(0.6)";
    instruction.style.opacity = "0";
    instruction.style.visibility = "hidden";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function aboutus() {
    aboutusBlock.style.transition = "0.3s";
    aboutusBlock.style.opacity = "1";
    aboutusBlock.style.transform = "scale(1)";
    aboutusBlock.style.visibility = "visible";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function closeAboutus() {
    aboutusBlock.style.transform = "scale(0.6)";
    aboutusBlock.style.opacity = "0";
    aboutusBlock.style.visibility = "hidden";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function shop() {
    shopBlock.style.transition = "0.3s";
    shopBlock.style.opacity = "1";
    shopBlock.style.transform = "scale(1)";
    shopBlock.style.visibility = "visible";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function closeShop() {
    shopBlock.style.transform = "scale(0.6)";
    shopBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function profile() {
    profileBlock.style.transition = "0.3s";
    profileBlock.style.opacity = "1";
    profileBlock.style.transform = "scale(1)";
    profileBlock.style.visibility = "visible";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function closeProfile() {
    profileBlock.style.transform = "scale(0.6)";
    profileBlock.style.opacity = "0";
    profileBlock.style.visibility = "hidden";
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function resetGame() {
    let points = 10;
    let lifeline = 2;
    let showAnswer = 2;
    let skips = 2;
    let plusTime = 2;
    let trophy = 0;
    localStorage.setItem("point",points);
    localStorage.setItem("lifelines",lifeline);
    localStorage.setItem("showAnswers",showAnswer);
    localStorage.setItem("skips",skips);
    localStorage.setItem("plusTime",plusTime);
    localStorage.setItem("trophy",trophy);

    pointVal.innerText = localStorage.getItem("point");
    pointValue.innerText = localStorage.getItem("point");
    lifelineValue.innerText = localStorage.getItem("lifelines");
    answerValue.innerText = localStorage.getItem("showAnswers");
    skipValue.innerText = localStorage.getItem("skips");
    plusTimeValue.innerText = localStorage.getItem("plusTime");
    trophy = parseInt(localStorage.getItem("trophy"));
    
    trophyValue.innerText = 0;
    trophy1.style.opacity = "0.4";
    trophy2.style.opacity = "0.4";
    trophy3.style.opacity = "0.4";
    trophy4.style.opacity = "0.4";
    
    earnPoints.innerText = "Game Reset";
    earnPoints.style.visibility = "visible";
    setTimeout(() => {
        earnPoints.style.visibility = "hidden";
    },1000);
    if(isClickSound === "on") {
    clickSound.play();
    }
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
    if(isClickSound === "on") {
    clickSound.play();
    }
}
function btn() {
    if(mode === "on") {
        container2.style.backgroundColor = "white";
        mode = "off";
        btn2.style.transform = "translateX(0px)";
       // clickSound = clickSound.remove();
        isClickSound = "off";
        clickSound.pause();
        if(isClickSound === "on") {
        clickSound.play();
        }
    } else {
        container2.style.backgroundColor = "skyblue";
        mode = "on";
        btn2.style.transform = "translateX(70px)";
      //  clickSound = document.createElement("audio");
      //  clickSound.setAttribute("src","Sound Effects/Click.mp3");
        isClickSound = "on";
        clickSound.play();
        if(isClickSound === "on") {
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
      //  backgroundSound = backgroundSound.remove();
        backgroundMusic = "off";
        if(isClickSound === "on") {
        clickSound.play();
        }
        console.log("in if");
    } else {
        container3.style.backgroundColor = "skyblue";
        modeTwo = "on";
        btn3.style.transform = "translateX(70px)";
         //   backgroundSound = document.createElement("audio");
         //   backgroundSound.setAttribute("src","Sound Effects/Game Background Music.mp3");
         //   backgroundSound.setAttribute("loop","true");
            backgroundSound.play();
            backgroundMusic = "on";
        if(isClickSound === "on") {
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
        earnPoints.innerText = "Earn Points";
        earnPoints.style.visibility = "visible";
        setTimeout(() => {
            earnPoints.style.visibility = "hidden";
        },1000);
    }
 if(isClickSound === "on") {
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
        earnPoints.innerText = "Earn Points";
        earnPoints.style.visibility = "visible";
        setTimeout(() => {
            earnPoints.style.visibility = "hidden";
        },1000);
    }
 if(isClickSound === "on") {
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
 if(isClickSound === "on") {
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
 if(isClickSound === "on") {
  clickSound.play();
 }
}