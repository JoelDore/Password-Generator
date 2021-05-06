const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
const charTypes = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
];
const prompts = [
    'Include lowercase letters?',
    'Include uppercase letters?',
    'Include numbers?',
    'Include special characters?'
];

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    passwordText.value = generatePassword();
    // Automatically select text when generated
    passwordText.focus();
    passwordText.select();
}

function shuffle(arr) {
    let arrCopy = [...arr]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const jthItem = arrCopy[j]
        arrCopy[j] = arrCopy[i]
        arrCopy[i] = jthItem
    }
    return arrCopy
}

function generatePassword() {
    // Prompt user for length of password
    let pwLength = parseInt(prompt('Enter length of desired password:'));
    // Validate length is within bounds
    if (isNaN(pwLength)) {
        alert('Please enter a numerical value.');
        return '';
    } else if (pwLength < 8 || pwLength > 128) {
        alert('Password must be between 8 and 128 characters.');
        return '';
    } else {
        let charBank = [];
        let count = 0;
        for (let i = 0; i < charTypes.length; i++) {
            // Confirm desired character types
            if (confirm(`${prompts[i]} Click "OK" for yes, or "Cancel" for no.`)) {
                charBank.push(charTypes[i])
                count += 1;
            };
        };

        if (count === 0) {
            alert('You must select at least one character type.');
            return '';
        } else {
            // Select random characters for password
            let pwArray = [];
            for (let i = 0; i < pwLength; i++) {
                let j = i % charBank.length;
                pwArray.push(charBank[j][Math.floor(Math.random() * charBank[j].length)]);
            }
            return pwArray.join('');
        }
    }
}
