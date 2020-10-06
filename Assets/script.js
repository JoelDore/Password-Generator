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
    var charTypes = {
        lc: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        uc: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        symbols: ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '_', '`', '{', '|', '}', '~']
    };
    var prompts = {
        lc: ['Should the password contain lowercase letters?'],
        uc: ['Should the password contain uppercase letters?'],
        digits: ['Should the password contain numbers?'],
        symbols: ['Should the password contain special characters?']
    };
    // Prompt user for length of password
    var pwLength = parseInt(prompt('Enter length of desired password:'));
    // Validate length is within bounds
    if (pwLength < 8 || pwLength > 128) {
        alert('Sorry, password must be between 8 and 128 characters.');
        break
    }
    // Prompt user for character types (loop) and add to array of desired characters

    // Validate at least one type selected

    // Loop through new array to select random characters for password

    // Return password as string (.join)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
