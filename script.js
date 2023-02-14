class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    
        this.startButton.addEventListener('click', this.start);
    }

    // A note: the following method equals to:
    // start: function() {
    //     console.log(this);
    // }
    // However, there is a problem with this syntax, due to the keyword 'this'.
    // In fact, the following code logs the startButton.
    // start() {
    //     console.log(this)
    // }
    // To avoid this behaviour and make sure the 'start' method refers to the Timer class, 
    // we need to use an arrow function like so:
    start = () => {
        console.log(this, 'I\'M THIS!')
    }
    // By using an arrow function, the 'start' method is defined behind the scenes as a property of 'this',
    // 'this' being the actual instance of the Timer class.
    // This solution allows me to solve the 'this' issue in a (more) modern way.
    // FYI: There are also other more advanced solutions, like calling 'bind', 'call' or 'apply' on the method.
    // For more info, see video no. 203 of 'The Modern JavaScript Bootcamp' by Colt Steele.
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);