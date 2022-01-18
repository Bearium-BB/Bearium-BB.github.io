const playinput = document.getElementById("playinput");
const b1 = document.getElementById("b1");
const guess = document.getElementById("guess");
const howClose = document.getElementById("howClose");
const answerP = document.getElementById("answer");
const section = document.querySelector("section")
const end = document.getElementById("end");
const guessS = document.getElementById("guestCounter");


answer = Math.floor(Math.random() * 100) + 1;
var guestCounter = 0
b1.addEventListener("click", function() {

    if (!isNaN(playinput.value) && !playinput.value == "") {

        guess.innerText = playinput.value;
        playinput.placeholder = "Guess here";
        guestCounter += 1;
        guessS.innerText = `Total guess count : ${guestCounter}`

        if (answer == playinput.value) {
            howClose.innerText = "=";
            answerP.innerText = answer;
            section.classList.add("winer");
            end.classList.add("winer2");
            end.style.zIndex = 100;
            setTimeout(ResetToDefault, 3000);
            answer = Math.floor(Math.random() * 100) + 1;


        } else if (answer > playinput.value)
            howClose.innerText = ">"

        else
            howClose.innerText = "<"
    } else if (playinput.value === "") {
        playinput.value = ""
        playinput.placeholder = "Can't leave empty";
    } else {
        playinput.value = ""
        playinput.placeholder = "Invalid Data";
    }
    playinput.value = "";
})

function ResetToDefault() {
    section.classList.remove("winer")
    end.classList.remove("winer2")
    answerP.innerText = "";
    playinput.value = "";
    guess.innerText = "";
    howClose.innerText = "?"
    playinput.placeholder = "Guess here";
    end.style.zIndex = -1;
    guessS.innerText = `Total guess count : 0`;
    guestCounter = 0;
}