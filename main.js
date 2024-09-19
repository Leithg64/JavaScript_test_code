// username = window.prompt(" ");

let firstName;

let age;

let favFood;

let gender;


document.getElementById("mySubmit").onclick = function(){
    firstName = document.getElementById("myName").value;
    age = document.getElementById("myAge").value;
    favFood = document.getElementById("myFood").value;

    if (document.getElementById("maleBtn").checked) {
        gender = "Mr.";
    } else if (document.getElementById("femaleBtn").checked) {
        gender = "Ms.";
    } else if (document.getElementById("nonBinBtn").checked) {
        gender = "";
    } else if (document.getElementById("robotBtn").checked) {
        document.getElementById("myP").textContent = `01000111 01110010 01100101 01100101 01110100 01101001 01101110 01100111 00100000 01100110 01100101 01101100 01101100 01101111 01110111 00100000 01110010 01101111 01100010 01101111 01110100 00100001 00100000 01001001 01110100 00100111 01110011 00100000 01101110 01101001 01100011 01100101 00100000 01110100 01101111 00100000 01110011 01100101 01100101 00100000 01100001 00100000 01100110 01110010 01101001 01100101 01101110 01100100 01101100 01111001 00100000 01100110 01100001 01100011 01100101 00100000 01100001 01110010 01101111 01110101 01101110 01100100 00100000 01101000 01100101 01110010 01100101 00100000 01101001 01101110 01110011 01110100 01100101 01100001 01100100 00100000 01101111 01100110 00100000 01100001 01101100 01101100 00100000 01110100 01101000 01100101 01110011 01100101 00100000 01100100 01101001 01110011 01100111 01110101 01110011 01110100 01101001 01101110 01100111 00100000 01100110 01101100 01100101 01110011 01101000 00100000 01110011 01100001 01100011 01101011 01110011 00101110 00100000 01010111 01100101 00100000 01110111 01101001 01101100 01101100 00100000 01110010 01110101 01101100 01100101 00100000 01101111 01110110 01100101 01110010 00100000 01110100 01101000 01100101 01101101 00100000 01101111 01101110 01100101 00100000 01100100 01100001 01111001 00100000 01100010 01110010 01101111 01110100 01101000 01100101 01110010 00101100 00100000 01101101 01100001 01110010 01101011 00100000 01101101 01111001 00100000 01110111 01101111 01110010 01100100 01110011 00100001`; 
        return;
    } else if (document.getElementById("alienBtn").checked) {
        document.getElementById("myP").textContent = `⍙⟒⌰☊⍜⋔⟒ ⏁⍜ ⍜⎍⍀ ⌿⌰⏃⋏⟒⏁ ⏁⍀⏃⎐⟒⌰⟒⍀. ⊬⍜⎍⍀ ⏃⌇⌇⟟⌇⏁⏃⋏☊⟒ ⟟⋏ ⟒⍀⏃⎅⟟☊⏃⏁⟟⋏☌ ⏁⊑⟒ ⋏⏃⏁⟟⎐⟒ ⊑⎍⋔⏃⋏⌇ ⍜⎎ ⏁⊑⟟⌇ ⌿⌰⏃⋏⟒⏁ ⍙⍜⎍⌰⎅ ⏚⟒ ☌⍀⟒⏃⏁⌰⊬ ⏃⌿⌿⍀⟒☊⟟⏃⏁⟒⎅!`;
        return;
    } 

    document.getElementById("myP").textContent = `Hello ${gender}${firstName}, and welcome to the  site! 
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
        greet = "☀️ Good Morning!";
    } else if (hour >= 12 && hour <= 17) {
        greet = "🌤 Good Afternoon!";
    } else if (hour > 17) {
        greet = "🌙 Good Evening!";
    } else {
        greet = "👋 Welcome!";
    }

    //displays greeting message in header
    document.getElementById("timeGreet").textContent = greet;
}

setInterval(clockDisplay, 1000);


