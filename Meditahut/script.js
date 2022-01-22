const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// Watchong fpr selected breaths from user
numberOfBreaths.addEventListener("change", () => {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});


// Grow/Shrink Circle
const growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() => {
        circleProgress.classList.remove("circle-grow");
    }, 8000);
};

//Breathing INstructions
const breathsTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Breath in"
    console.log("Do it");
    setTimeout(() => {
        instructions.innerText = "Hold breath"
        console.log("Almost there");
        setTimeout(() => {
            instructions.innerText = "Exhale Breath slowly ";
            console.log("Good Job!");
        }, 4000)
    }, 4000);
};

// Breathing App Function
const breathingApp = () => {
    const breathingAnimation = setInterval(() => {
    if(breathsLeft === 0){
     clearInterval(breathingAnimation);
     instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
     start.classList.remove('buton-inactive');
     breathsLeft = numberOfBreaths.value;
     breathsText.innerText = breathsLeft;
     return;
    }
    growCircle();
    breathsTextUpdate();
    }, 12000);
};

// Start Breathing
start.addEventListener('click', () => {
    start.classList.add("button-inactive");
    instructions.innerText = "Get relaxed and ready to begin breathing :D";
    setTimeout(() => {
        instructions.innerText = "Breathing is about to begin....";
        setTimeout(() => {
        breathingApp();
        growCircle();
        breathsTextUpdate();
        }, 2000);
    }, 2000);
}); 