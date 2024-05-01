let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
})

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let = randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameseq.push(randColor);
    console.log("gameseq", gameseq);
    gameFlash(randbtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <br>${level}</b> Press any key to start.`;
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = " red";
        }, 150);
        document.querySelector("body").style.backgroundColor = " white";
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameseq = [];
    userSer = [];
    level = 0;
}