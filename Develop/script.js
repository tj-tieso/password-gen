// Assignment code here

// A. When User clicks "Generate password" they presented with a series of prompts
//    1. Length of password (8 to 128 characters), then...
//       - store data
//    2. Include Lowercase?
//       - store data
//    3. Include Uppercase?
//       - store data
//    4. Include Numbers?
//       - store data
//    5. Include Special?
//       - store data
// B. Validate Input. At least one character type should be selected.
// C. Display generated password

//function to generate random password
// // var

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// var generatePassword () {

// }

// function to select Characters
var generatePassword = function () {
  // how many characters?
  var characterSelect = window.prompt(
    "How many Characters would you like to include? Please enter a number from 8-128."
  );

  if (
    characterSelect === "" ||
    characterSelect === null ||
    characterSelect < 8 ||
    characterSelect > 128
  ) {
    window.alert("Please enter a valid answer. Please try again");
    // return to start of function
    return generatePassword();
  }
  // include lowercase?
  // inlude uppercase?
  // include numbers?
  // include special?
  return "Pasword goes here";
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
