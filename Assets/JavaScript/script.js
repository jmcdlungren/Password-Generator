// Creates variable to select the "generate" id, which is the HTML button element.
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creates function for the password generation.
function generatePassword() {
  
  //Created variables each for capital letters, lowercase letters, symbols, and numbers.
  var capLtr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var lwrLtr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var sym = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", '{', "}", '~', "`", '"'];

  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // Creates prompt to have user enter in a value between 8 and 128 to represent the number of characters.
  var passwordLength = window.prompt("Please select length between 8 and 128 characters.");

  // Creates if / else function for if user follows the prompt and correctly inputs a value between 8 and 128, or if the user doesn't follow the prompt and enters in a different value.
  if (passwordLength >=8 && passwordLength <=128) {

  // Creates prompts to confirm if user would like the following options within their password.
  var capLtrChecker = confirm("Please confirm if you would like capital letters.");
  var lwrLtrChecker = confirm("Please confirm if you would like lowercase letters.");
  var symChecker = confirm("Please confirm if you would like symbols.");
  var numChecker = confirm("Please confirm if you would like numbers.");
  
  // Creates an array for the variables above.
  const finalArrayChoices = [];

  // Creates if statements for the contents of the password, calling the above variables for each option and applying them to the array.
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

  // Creates variable for the password itself.
  var finalPassword = ""

  // Creates a loop to first determine the length of the password based on the value the user enters with the very first prompt, between 8 & 128. Finally the remainder of the loop creates a randomized value based on the array created from the other prompts selected above.
  for (i = 0; i < passwordLength; i++) {
    finalPassword += finalArrayChoices[Math.floor(Math.random() * finalArrayChoices.length)]
  };

  // This is "else" portion of the if / else function for the first prompt. If the user selects any value that is not contained between 8 and 128, the user will be prompted the instructions again, and then the generatePassword function will restart.
  return finalPassword;
  } else {
    alert ("Please choose a number between 8 and 128.");
    generatePassword();
  };

};
