// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password string
function generatePassword() {
  // Create objects with arrays of possible characters types and prompt messages

  // Prompt user for length of password

  // Validate length is within bounds

  // Prompt user for character types (loop) and add to array of desired characters

  // Validate at least one type selected

  // Loop through new array to select random characters for password

  // Return password as string (.join)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
