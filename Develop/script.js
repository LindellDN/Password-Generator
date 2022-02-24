// Assignment code here
/*
// mkae a function for generating password
function generatePassword () {
  //passowrd length
  //
  //
};

*/
//declare varible for user input
//prompt for password length (between 8-128 charecters)
let pwLength = prompt ("please choose between a password length between 8 and 128 characters",'')
//function for password crieteria input
//min/max character if statements
/*
prompt ("generated passwords must be between 8 and 128 characters",'' )
*/

//prompts for included character types 

//confirm character types
//
confirm ("will your password include uppercase letters?")
//if t/f statement
confrim ("will your password include lowercase letters?")
//if t/f statement
confrim ("will your password include special characters?")
//if t/f statement
confirm ("will your password include numerals?")
//if t/f statement
/*
make a loop while all repones = false
*/

//arry of uppercase
const upperCase = [
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
const lowerCase = [
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
const numeral = [
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
const specChar = [
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

//minimum of 1 charecter type
//prompt "you must select at least one chartater type"
 


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
