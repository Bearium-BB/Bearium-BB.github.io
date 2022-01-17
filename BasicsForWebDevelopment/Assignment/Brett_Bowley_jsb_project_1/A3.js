const inputCTOF = document.getElementById('inputCTOF')
const buttonCTOF = document.getElementById('buttonCTOF')
const outputCTOF = document.getElementById('outputCTOF')

buttonCTOF.addEventListener('click', function() {
    var num = inputCTOF.value.trim();
    if (!isNaN(num) && !num == "") {
        let newNum = (num * 9 / 5) + 32
        outputCTOF.innerText = ` its ${newNum.toFixed(2)} F `;
    } else if (num == "") {
        outputCTOF.innerText = "Please add data";
    } else {
        outputCTOF.innerText = "Please enter a number";
    }
})




const inputFTOC = document.getElementById('inputFTOC')
const buttonFTOC = document.getElementById('buttonFahrenheitToCelsius')
const outputFTOC = document.getElementById('outputFTOC')

buttonFahrenheitToCelsius.addEventListener('click', function() {

    var num = inputFTOC.value.trim();

    if (!isNaN(num) && !num == "") {

        let newNum = (num - 32) * 5 / 9;
        outputFTOC.innerText = `its ${newNum.toFixed(2)} C`;

    } else if (num == "") {
        outputFTOC.innerText = "Please add data";
    } else {

        outputFTOC.innerText = "Please enter a number";
    }

})
const ModeChanger = document.getElementById('ModeChanger')
const body = document.querySelector('body')
const h2 = document.querySelectorAll('h2')
const p = document.querySelectorAll('p')
const inputcss = document.getElementsByClassName('inputcss')
var mode = true
ModeChanger.addEventListener('click', function() {
    if (mode) {
        ModeChanger.value = "light mode";
        body.style.background = "#232931"
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "#EEEEEE";

        }

        for (let i = 0; i < p.length; i++) {

            p[i].style.color = "#EEEEEE";
            p[i].style.background = "#393E46";

        }

        for (let i = 0; i < inputcss.length; i++) {

            inputcss[i].style.background = "#393E46";
            inputcss[i].style.color = "#EEEEEE";
        }
        mode = false;
    } else {
        ModeChanger.value = "Dark mode";
        body.style.background = "#F4F5F6"
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "#000000";

        }

        for (let i = 0; i < p.length; i++) {

            p[i].style.color = "#000000";
            p[i].style.background = "#FFFFFF";

        }
        for (let i = 0; i < inputcss.length; i++) {

            inputcss[i].style.background = "#FFFFFF";
            inputcss[i].style.color = "#474747";
        }
        mode = true;
    }


})