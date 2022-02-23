// Assignment code here
//declare varible for user input
//prompt for password length (between 8-128 charecters)
let pwLength = prompt ("please choose between a password length between 8 and 128 characters",'')
//function for password crieteria input
//min/max character if statements
if (pwLength > 128) {
  prompt ("generated passwords must be less than 128 characters",'' )
}
if (pwLength < 8) {
  prompt ("generated passwords must be at least 8 characters", '')
}
//else statment to proceed to next prompt
else {
  let pwLength = prompt ("please choose between a password length between 8 and 128 characters",'')
}

//prompt for included character types
//array of character types
//minimum of 1 charecter type
//prompt "you must select at least one chartater type"

//display password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
