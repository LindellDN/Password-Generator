// Assignment code here
// mkae a function for generating password
/*function generatePassword () {
  
};

*/
//function for passowrd options
function getPwOptions(){

//prompt for password length (between 8-128 charecters)
var length = parseInt(
 prompt ('please choose between a password length between 8 and 128 characters",')
);

 //password crieteria input- number
 if (Number.isNaN(length)) {
  alert ('please enter a numeric value between 8-128');
  return null;
}

//min/max character length requirment  if statements
if (length <8) {
  alert('password must be at least 8 characters long');
  return null
}
if (length <128) {
  alert ('generated passwords must be between 8 and 128 characters');
  return null;
}

//confirm character types
//
var hasUpperCase = confirm("your password include uppercase letters?");
var hasLowerCase = confrim ("will your password include lowercase letters?");
var hasSpecChar = confrim ("will your password include special characters?");
var hasNumeral = confirm ("will your password include numerals?");


//if all reponses to char selction = false
if (
  hasUpperCase === false &&
  hasLowerCase === false &&
  hasSpecChar === false &&
  hasNumeral === false
) {
  alert ('you must select at least one character type');
  return null;
}
//store user password choices
var pwOptions = {
  length: length,
  hasUpperCase: hasUpperCase,
  hasLowerCase: hasLowerCase,
  hasSpecChar: hasSpecChar,
  hasNumeral: hasNumeral
};
return pwOptions;


}

//arry of uppercase
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]
//array of lowercase
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
//array of numbers
var numeral = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
]
//array of character types
var specChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "+",
  "/"
]

//selcet raondom character from array function

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}
//


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
