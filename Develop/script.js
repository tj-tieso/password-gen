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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var includeLowers = String.fromCharCode(97, 122);
var includeUppers = String.fromCharCode(65, 90);
var includeNumbers = String.fromCharCode(48, 57);
var includeSpecials = String.fromCharCode(33, 47).concat();

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //"password goes here";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to select Characters
var generatePassword = function () {
  // how many characters?
  var promptCharacterLength = window.prompt(
    "How many Characters would you like to include? Please enter a number from 8-128."
  );

  if (
    promptCharacterLength === "" ||
    promptCharacterLength === null ||
    promptCharacterLength < 8 ||
    promptCharacterLength > 128
  ) {
    window.alert("Please enter a valid answer. Please try again");
    // return to start of function
    return generatePassword();
  }
  console.log(promptCharacterLength);

  // include lowercase?
  var promptLower = window.prompt(
    "Would you like to include lowercase characters?"
  );

  // inlude uppercase?
  var promptUpper = window.prompt(
    "Would you like to include uppercase characters?"
  );

  // include numbers?
  var promptNumber = window.prompt("Would you like to include numbers?");

  // include special?
  var promptSpecial = window.prompt(
    "Would you like to include special characters?"
  );
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
