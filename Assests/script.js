// Assignment code here
var length; 
var otherCriteria;
var password;
var passwordText;
var randomNumber;
var randomNumber1;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  length = prompt("Please enter desired length", "8-128");

  while (length < 8 || length > 128) {
    length = prompt("Please enter desired length", "8-128");
  }
  
  otherCriteria = prompt("Do you wish to include lowercase, uppercase, numeric, and/or special characters? (Y for Yes and N for No)");
  
  while (otherCriteria != "Y" && otherCriteria != "N") {
    otherCriteria = prompt("Do you wish to include lowercase, uppercase, numeric, and/or special characters? (Y for Yes and N for No)");
  }
  
  if (otherCriteria == "Y") {
    var chars = "012345678";
    var letters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < length - 1; i++) {
      randomNumber = Math.floor(Math.random() * chars.length);
      passwordText += randomNumber;
    }
    randomNumber1 = Math.floor(Math.random() * letters.length);
    passwordText += letters.substring(randomNumber1, randomNumber1 + 1);
  } 

  else {
    var chars = "012345678";
    for (var i = 0; i <= length - 1; i++) {
      randomNumber = Math.floor(Math.random() * chars.length);
      passwordText += randomNumber;
    } 
  }
  return passwordText;
}

function writePassword(event) {
  event.preventDefault();
  password = generatePassword();
  passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
