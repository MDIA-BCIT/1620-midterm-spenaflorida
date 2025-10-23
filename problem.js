/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

let password = "I Love Sonja!";
let constOfPassword = "I Love Sonja!";

function correctPassword(password) {
    console.log("The correct password is '" + password + "'");
}

correctPassword("I Love Sonja!");

if (password !== "I Love Sonja!") {
    console.log("Access Granted");
} else if (password !== "") {
    console.log("Acess Denied!");
}
if (password !== "forgot") {
    console.log("Here is a hint");
} else {
    console.log(
        "This password you set should not be used because it glitches the system"
    );
}
if (password !== "reset") {
    console.log("Let's reset your account");
} else {
    console.log(
        "This password you set should not be used because it glitches the system"
    );
}

// I made the password "I Love Sonja!" for the user to input as the correct password.
// I tried to make a "if" variable statement for when the user inputs on the following words.
// I had a hard time figuring out on how to make a input place for the user to type in the password.
