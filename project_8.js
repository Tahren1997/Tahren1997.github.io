const startStopBtn = document.getElementById('startStopBtn')
const startStopIcon = document.querySelector('#startStopBtn i')
const resetBtn = document.getElementById('resetBtn')
const resetIcon = document.querySelector('#resetBtn i')
let timer = document.getElementById('timer')

// Define the variables for the timer disaplay
let second = 0;
let minute = 0;
let hour = 0;
let timeInterval;
let timerStatus = 'stopped'

let fSecond;
let fMinute;
let fHour;

function stopWatch() {

        second += 1;
        console.log(second)

        if (second >= 60) {
            minute += 1;
            second = 0;
        }
        if (minute >= 60) {
            hour += 1;
            minute = 0;
        }

        if (second < 10) {
            fSecond = '0' + second.toString()
        } else {
            fSecond = second.toString()
        }
        if (minute < 10) {
            fMinute = '0' + minute.toString()
        } else {
            fMinute = minute.toString()
        }
        if (hour < 10) {
            fHour = '0' + hour.toString()
        } else {
            fHour = hour.toString()
        }

        if (hour == 60) {
            second = 0;
            minute = 0;
            hour = 0;

            fSecond = '0' + second.toString()
            fMinute = '0' + minute.toString()
            fHour = '0' + hour.toString()
            timer.innerText = `${fHour}:${fMinute}:${fSecond}`
            clearInterval(stopWatch);
        }
        
        // Except for changing the value, the display have to be updated every second
        timer.innerText = `${fHour}:${fMinute}:${fSecond}`
}



startStopBtn.addEventListener('click', () => {

    if (timerStatus === 'stopped') {
        timeInterval = setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = 'started';
    } else {
        clearInterval(timeInterval);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = 'stopped';
    }

})

resetBtn.addEventListener('click', (evt) => {

    clearInterval(stopWatch);
    startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    second = 0;
    minute = 0;
    hour = 0;

    fSecond = '0' + second.toString()
    fMinute = '0' + minute.toString()
    fHour = '0' + hour.toString()
    

    timer.innerText = '00:00:00' 
})
