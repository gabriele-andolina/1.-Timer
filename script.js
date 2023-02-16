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
        // Compared to the previous commit, here I'm condensing all the logic into one line.
        // What's happening here, behind the scenes, is that:
        // 1) on the right-hand side of the equal sign, I'm calling the get method to retrieve 
        // the value of the input (the remaining time we're at at a specific point in time);
        // 2) on the left-hand side of the equal sign, I'm calling the set method to set the updated 
        // remaining time.
        this.timeRemaining = this.timeRemaining - 1;
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