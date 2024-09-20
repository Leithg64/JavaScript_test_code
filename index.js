const correctPassword = "password123";

//Add evenet listener for the submit button being clicked
document.getElementById("passSubmit").addEventListener("click", function() {

    //get the input value
    const enteredPassword = document.getElementById("passwordEntry").value;

    //check if the entered password is correct
    if (enteredPassword === correctPassword) {
        //redirect to desired page
        window.location.href = "main.html";
    } else {
        alert("Password Incorrect!");
    }
});