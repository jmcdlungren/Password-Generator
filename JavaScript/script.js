// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var capLtr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var lwrLtr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var sym = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", '{', "}", '~', "`", '"'];

  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var passwordLength = window.prompt("Please select length between 8 and 128 characters.");

  if (passwordLength >=8 && passwordLength <=128) {

  var capLtrChecker = confirm("Please confirm if you would like capital letters.");
  var lwrLtrChecker = confirm("Please confirm if you would like lowercase letters.");
  var symChecker = confirm("Please confirm if you would like symbols.");
  var numChecker = confirm("Please confirm if you would like numbers.");

  const finalArrayChoices = [];

  if (capLtrChecker === true) {
    finalArrayChoices.push.apply(finalArrayChoices, capLtr);
  }

  if (lwrLtrChecker === true) {
    finalArrayChoices.push.apply(finalArrayChoices, lwrLtr);
  }

  if (symChecker === true) {
    finalArrayChoices.push.apply(finalArrayChoices, sym);
  }

  if (numChecker === true) {
    finalArrayChoices.push.apply(finalArrayChoices, num);
  }

  var finalPassword = ""

  for (i = 0; i < passwordLength; i++) {
    finalPassword += finalArrayChoices[Math.floor(Math.random() * finalArrayChoices.length)]
  };

  return finalPassword;
  } else {
    alert ("Please choose a number between 8 and 128.");
    generatePassword();
  };

};
