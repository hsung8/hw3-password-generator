// Assignment Code
var generateBtn = document.querySelector("#generate");

// function begin
function generatePassword() {

  // ask password length
  var pLength = parseInt(prompt("Please enter a number between 8 to 128 for your password length."))

  // if the password length is between 8 and 128, execute function inside, if not, alert user.
  if (typeof pLength == 'number' && pLength >= 8 && pLength <= 128) {
    alert("Password with " + pLength + " digits/characters will be generated")

    // collect user preference
    var pLower = confirm("Do you want to include lower case letter?")
    var pUpper = confirm("Do you want to include upper case letter?")
    var pNumber = confirm("Do you want to include number?")
    var pSpecial = confirm("Do you want to include special characters?")

    // create obj that includes user preference
    var wordObj = [
      { type: "Lower", element: "abcdefgfijklmnopqrstuvwxyz", selection: pLower },
      { type: "Upper", element: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", selection: pUpper },
      { type: "Number", element: "1234567890", selection: pNumber },
      { type: "Special", element: "~!@#$%^&*()_+=-`';:[]{}?/", selection: pSpecial }
    ]

    // if none of the password detail type is selected, alert user. 
    if (pLower == false && pUpper == false && pNumber == false && pSpecial == false) {
      alert("You need to select at least one among lower case, upper case, number, and special charaters!")

      return "Start again"

    } else {

      // else, filter the wordObj based on the user prefernce
      var prefWord = wordObj.filter(wordObj => wordObj.selection === true);
      console.log(prefWord)
    };

    // create an empty variable
    var result = '';

    // based on the password length and filtered wordObj, randomly build a password
    for (i = 0; i < pLength; i++) {
      var randomEl = prefWord[Math.floor(Math.random() * prefWord.length)]["element"]
      result += randomEl.charAt(Math.floor(Math.random() * randomEl.length))
      console.log(result)
    }
    return result

  } else {
    alert("Please enter any INTEGER BETWEEN 8 AND 128!")
    return "Start again"
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
