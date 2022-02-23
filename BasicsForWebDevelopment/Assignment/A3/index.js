function Day1() {
    const buttonChoice = document.getElementsByClassName('buttonChoice');
    const gridcss = document.getElementsByClassName('gridcss');
    const playerChoices = []
    const colourPalette = []
    for (const i of buttonChoice) {

        i.addEventListener('click', function(event) {
            if (i.value == 1) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[0].style.backgroundColor);
                changingColour();
            }
            if (i.value == 2) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[1].style.backgroundColor);
                changingColour();
            }
            if (i.value == 3) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[2].style.backgroundColor);
                changingColour();
            }
            if (i.value == 4) {
                playerChoices.push(i.value);
                colourPalette.push(gridcss[3].style.backgroundColor);
                changingColour();
            }
        })

    }



    function generateColour() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor;
    }

    function changingColour() {
        for (const i of gridcss) {
            i.style.backgroundColor = generateColour();
        }
    }

}

Day1();