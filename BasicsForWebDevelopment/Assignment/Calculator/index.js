const allEntities = document.getElementsByClassName("allEntities")
const numberScreen = document.getElementById("numberScreen")

var equation
for (const i of allEntities) {
    i.addEventListener('click', function(event) {

        if (i.value !== "=" && i.value !== "CA") {
            equation = numberScreen.value += i.value;
        }

        if (i.value == "CA") {
            equation = numberScreen.value = "";
        }

        if (i.value === "=" && i.value === "") {

            equation = numberScreen.value;

            numberScreen.value = eval(equation);
        } else {
            equation = "";
            numberScreen.value = "Error";
        }
    })
}