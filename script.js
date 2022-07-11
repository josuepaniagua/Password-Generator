var passwordText = document.getElementById("password");
var generateBtn = document.getElementById("generate");

//listener that will start function once the generate Button is clicked
generateBtn.addEventListener("click", writePassword);

//function that will generate password
function writePassword() {
  //Start of password length; responsible for getting length number from user
  var passwordLengthPrompt = window.prompt(
    "Enter the length of your password below! (Must be at least 8 characters and no more than 128 characters)",
    "Enter Length"
  );
  if (
    passwordLengthPrompt == null ||
    passwordLengthPrompt == "Enter Length" ||
    passwordLengthPrompt >= 129 ||
    passwordLengthPrompt <= 7
  ) {
    alert(
      "User picked number that was less than 8, more than 128, or did not enter a number. Try again"
    );
    exit;
  } else {
    alert("You have selected " + passwordLengthPrompt + " characters");
  }
  console.log(passwordLengthPrompt);
  //End of password length
  //Start of confirmation of lowercase letters; output will either be true or false
  var lowerCasePrompt = window.confirm(
    "Do you want lowercase letters within your password?"
  );
  console.log(lowerCasePrompt);
  //End of confirmation of lowercase letters
  //Start of confirmation of upperletters; output will either be true or false
  var upperCasePrompt = window.confirm(
    "Do you want uppercase letters within your password?"
  );
  console.log(upperCasePrompt);
  //End of confirmation of uppercase letters
  //Start of confirmation of numbers; output will either be true or false
  var numbersPrompt = window.confirm(
    "Do you want numbers within your password?"
  );
  console.log(numbersPrompt);
  //End of confirmation of numbers
  //Start of confirmation of symbols; output will either be true or false
  var symbolsPrompt = window.confirm(
    "Do you want symbols within your password?"
  );
  console.log(symbolsPrompt);
  //End of confirmation of symbols

  // establishes an object that can hold many many properties.
  var randomObject = {
    lower: randomLower,
    upper: randomUpper,
    number: randomNumber,
    symbol: randomSymbol,
  };

  //establishes variables for object that can be used within the generatePassword function
  var length = passwordLengthPrompt;
  var Lower = lowerCasePrompt;
  var Upper = upperCasePrompt;
  var Number = numbersPrompt;
  var Symbol = symbolsPrompt;
  passwordText.innerText = generatePassword(
    Lower,
    Upper,
    Number,
    Symbol,
    length
  );

  //function will grab variables which will call the random character functions
  function generatePassword(lower, upper, number, symbol, length) {
    var generatedPassword = "";
    var typesCount = lower + upper + number + symbol;
    var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );
    if (typesCount === 0) {
      return "Make sure to select ok once when it asks you if you want lowercase, uppercase, numbers, or symbol characters ";
    }
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        var characters = Object.keys(type)[0];
        generatedPassword += randomObject[characters]();
      });
    }
    var password = generatedPassword.slice(0, length);
    console.log(password);
    return password;
  }

  //Functions for random lowercase letters, uppercase letters, numbers, and symbols
  //will go to String.fromCharCode and from 97 to 122 it will be lowercase letters
  function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  //will go to String.fromCharCode and from 65 to 90 it will be uppercase letters
  function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  //will go to String.fromCharCode and from 48 to 57 it will be numbers
  function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  //Would use String.fromCharCode but symbols are mixed between the lowercase, upper case, and numbers
  function randomSymbol() {
    const symbols = '/?.>,<";:]}[{=+-_)(*&^%$#@!`~';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}
