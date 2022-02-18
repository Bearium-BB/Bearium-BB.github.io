const timer = document.getElementById('timer');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const min = document.getElementById('min');
const hours = document.getElementById('hours');
const start = document.getElementById('start');
const manual = document.getElementById('manual');
var setTimer = false
var hoursMinBool = true;
var endTimer = new Date('0000-1-1');
const alarm = new Audio('audio/test.wav')
alarm.type = 'wav';

add.addEventListener('click', function() {
    if (hoursMinBool) {
        endTimer.setHours(endTimer.getHours() + 1);
        updateTimer(endTimer)
        setTimer = true
    } else if (!hoursMinBool) {
        endTimer.setMinutes(endTimer.getMinutes() + 1);
        updateTimer(endTimer)
        setTimer = true;
        console.log(endTimer)
    } else {}
})

sub.addEventListener('click', function() {
    if (hoursMinBool) {
        endTimer.setHours(endTimer.getHours() - 1);
        updateTimer(endTimer);
        setTimer = true;
    } else if (!hoursMinBool) {
        endTimer.setMinutes(endTimer.getMinutes() - 1);
        updateTimer(endTimer);
        setTimer = true;
    } else {

    }
})

hours.addEventListener('click', function() {
    hoursMinBool = true;
})

min.addEventListener('click', function() {
    hoursMinBool = false;
})

start.addEventListener('click', function() {
    setTimer = false;
    if (manual.value != '' && manual.value.length === 5) {
        endTimer.setHours(manual.value.substring(0, 2));
        endTimer.setMinutes(manual.value.substring(3, 5));
        manual.placeholder = manual.value
        manual.value = '';
    } else {
        manual.value = '';
        manual.placeholder = 'Error'
    }
})
setInterval(() => {
    if (!setTimer) {
        var now = new Date();
        updateTimer(now);
    }
    if (now.getHours() === endTimer.getHours() && now.getMinutes() === endTimer.getMinutes()) {
        timer.classList.add('endTimer');
        setTimeout(() => { timer.classList.remove('endTimer') }, 55000);
        alarm.play();
    }
}, 1000);





function updateTimer(whatdate) {
    timer.innerText = `${whatdate.getHours()}:${whatdate.getMinutes()}:${whatdate.getSeconds()}`
}