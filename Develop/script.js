// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// characters, strings from ASCII
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  characterLengthSelect();
  characterSelect();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// not working currently
// var generatePassword = (characterAmount, characters) => {
//   let result = "";
//   for (let i = 0; i < characterAmount; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }
//   return result;
// };

// character selection
var characterLengthSelect = function () {
  let characterAmount = "";
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
  return characterAmount;
};

var characterSelect = function () {
  let characters = "";
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
  return characters;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
