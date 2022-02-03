const waitTime = process.argv[2] || 3000;
const waitInterval = 500;
let currentTime =  0; 

const incrementTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${percentage}% complete`);
};

console.log(`setting a ${waitTime / 1000} second delay`);


const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const percentage = Math.floor((currentTime / waitTime) * 100);
    console.log("finished");
}

const interval = setInterval(incrementTime, waitInterval);
setTimeout(timerFinished, waitTime);
