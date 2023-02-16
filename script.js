class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);

    };
    
    tick = () => {
        // Below, the timeRemaining const is assigned the value retrieved by the timeRemaining getter (get method).
        // The value is treated as an instance variable but what happens behind the scenes is that the 
        // timeRemaining() get function is invoked to retrieve the needed value.
        const timeRemaining = this.timeRemaining;
        this.timeRemaining = timeRemaining - 1;
    };

    pause = () => {
        clearInterval(this.intervalId);
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
};

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);