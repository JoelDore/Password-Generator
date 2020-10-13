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
    // Create objects with arrays of possible characters types & corresponding prompt messages
    var charTypes = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '_', '`', '{', '|', '}', '~']
    ];
    var prompts = [
        'Should the password contain lowercase letters?',
        'Should the password contain uppercase letters?',
        'Should the password contain numbers?',
        'Should the password contain special characters?'
    ];
    // Prompt user for length of password
    var pwLength = parseInt(prompt('Enter length of desired password:'));
    // Validate length is within bounds
    if (pwLength < 8 || pwLength > 128) {
        alert('Sorry, password must be between 8 and 128 characters.');
        return '';
    } else {
        // Prompt user for character types (loop) and add to array of desired characters
        var charBank = [];
        var count = 0;
        for (var i = 0; i < charTypes.length; i++) {
            if (confirm(prompts[i] + ' Click \"OK\" for yes, or \"Cancel\" for no.') === true) {
                charBank.push(charTypes[i])
                count += 1;
            };
        };
        // Validate at least one type selected
        if (count === 0) {
            alert('You must select at least one character type.');
            return '';
        } else {
            // Loop through new array to select random characters for password
            var pwArray = [];
            for (var i = 0; i < pwLength; i++) {
                var j = i % charBank.length
                pwArray.push(charBank[j][Math.floor(Math.random() * charBank[j].length)])
            }
            // Return password as string (.join)
            return pwArray.join('');
        }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
