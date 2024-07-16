

const userName = prompt("Please enter your name:");

// Check if the user entered a name
if (userName) {
    // Display a welcoming message
    alert(`Welcome, ${userName}!`);
} else {
    // If no name was entered, display a different message
    alert("Welcome, guest!");
}
