let count = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;
let timerRunning = false;

// Start Timer
let startTimer = () => {
    count++;

    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100) - (minutes * 60));
    milliSeconds = Math.floor(count - (seconds * 100) - (minutes * 6000));

    document.querySelector('#minutes').innerText = leadingZero(minutes);
    document.querySelector('#seconds').innerText = leadingZero(seconds);
    document.querySelector('#m-seconds').innerText = leadingZero(milliSeconds);
};

// Click on Start Button
let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', function(){
    if(!timerRunning){
        interval = setInterval(startTimer, 10); //start the timer
        timerRunning = true;
    }
});

// Click on Stop Button
let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click', function(){
    clearInterval(interval);
});

// Click on Reset Button
let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', function(){
    clearInterval(interval); //stop the timer  
    count = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;
    document.querySelector('#minutes').innerText = '00';
    document.querySelector('#seconds').innerText = '00';
    document.querySelector('#m-seconds').innerText = '00';
});

// leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
};