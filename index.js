// username = window.prompt(" ");

let firstName;

let age;

let favFood;

document.getElementById("mySubmit").onclick = function(){
    firstName = document.getElementById("myName").value;
    age = document.getElementById("myAge").value;
    favFood = document.getElementById("myFood").value;
    document.getElementById("myP").textContent = `Hello ${firstName}, and welcome to the  site! 
    My records show that you are ${age}? Ew, OLD! And your favourite food is ${favFood}? 
    That's a little juvenile don't you think? Anyway enjoy the site I guess, just dont touch anything.`;
};

//Counter function that can increase, decrease or reset
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count
}


//Random number generator
let randomNum;

document.getElementById("numberBtn").onclick = function(){
    randomNum = Math.floor(Math.random() *1000) +1;
    document.getElementById("genNum").textContent = randomNum;
}

//CREATE A RANDOM NUMBER GAME, COMPETE AGAINST AI



//Displays current date and time using Date() function, updates every second
function clockDisplay() {
    const now = new Date();

    //Displays the current time
    document.getElementById("dateAndTime").textContent = now.toLocaleString();

    // Call greetMessage function to update the greeting based on time
    greetMessage();
}

// if-else statements
function greetMessage() {
    const now = new Date();
    const hour = now.getHours();
    let greet;

    if(hour < 12) {
        greet = "Good Morning";
    } else if (hour >= 12 && hour <= 17) {
        greet = "Good Afternoon!";
    } else if (hour > 17) {
        greet = "Good Evening";
    } else {
        greet = "Welcome!";
    }

    //displays greeting message in header
    document.getElementById("timeGreet").textContent = greet;
}

setInterval(clockDisplay, 1000);


