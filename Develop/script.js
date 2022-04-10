// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// characters, strings from ASCII
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz"; // String.fromCharCode(97, 122);
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // String.fromCharCode(65, 90);
var numberCharacters = "0123456789"; //String.fromCharCode(48, 57);
var specialCharacters = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  var password = characterSelect(); // should be generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate password prompts user to select Characters
function generatePassword() {}

// character selection
var characterSelect = function () {
  let characterAmount = "";
  let characters = "";
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
    return characterSelect();
  } else characterAmount = promptCharacterLength;
  console.log(characterAmount);

  var promptLowercases = window.confirm(
    "would you like to include lower case letters?"
  );
  if (promptLowercases) {
    (characters += lowerCharacters),
      console.log("we're including lower case!", characters);
  } else (characters = ""), console.log("we're not including lowercase");

  var promptUppercases = window.confirm(
    "would you like to include uppercase letters?"
  );
  if (promptUppercases) {
    (characters += upperCharacters),
      console.log("we're including uppercase!", characters);
  } else console.log("we're not including uppercase", characters);

  var promptNumbers = window.confirm("would you like to include numbers?");
  if (promptNumbers) {
    (characters += numberCharacters),
      console.log("we're including numbers!", characters);
  } else console.log("we're not including uppercase", characters);

  var promptSpecials = window.confirm(
    "would you like to include special characters?"
  );
  if (promptSpecials) {
    (characters += specialCharacters),
      console.log("we're including numbers!", characters);
  } else console.log("we're not including uppercase", characters);
  return characterAmount, characters;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
