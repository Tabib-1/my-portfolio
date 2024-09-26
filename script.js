document.getElementById("submitButton").onclick = function() {
    const name = document.getElementById("name").value;
    if (name) {
        document.getElementById("message").innerHTML = `Thank you, ${name}, for your submission!`;
        document.getElementById("name").value = ''; // Clear the input
    } else {
        document.getElementById("message").innerHTML = "Please enter your name.";
    }
};
