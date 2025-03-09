let startBut = document.getElementById('startBtn');
let stopBut = document.getElementById('stopBtn');
let resetBut = document.getElementById('resetBtn');
let shortBut = document.getElementById('shortBtn');
let longBut = document.getElementById('longBtn');
let minutes = document.getElementById('mins');
let seconds = document.getElementById('secs');
let mins = 25;
let secs = 10;

startBut.addEventListener('click', function() {
    let timer = setInterval(function() {
        if (seconds.value === 00) {
            minutes.textContent -= 1;
        } else {
            if (secs < 10){
                seconds.textContent = '0' + secs;
            }
            secs -= 1;
            seconds.textContent = secs;
        };
    }, 1000);
});

resetBut.addEventListener('click', function() {})
