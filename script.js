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



//function for passowrd options
function getPwOptions(){
  
  //prompt for password length (between 8-128 charecters)
  var length = parseInt(
    prompt ('please choose between a password length between 8 and 128 characters'));

 //password crieteria input- must be a numeral
  if (Number.isNaN(length)) {
    alert ('please enter a numeric value between 8-128');
    return null;
  }

  //min/max character length requirment  if statements
  if (length <8) {
    alert('password must be at least 8 characters long');
    return null;
  }

  if (length >128) {
    alert ('generated passwords can be no longer than 128 characters');
    return null;
  }

  //confirm character types

  var hasUpperCase = confirm('your password include uppercase letters?');

  var hasLowerCase = confirm('will your password include lowercase letters?');

  var hasSpecChar = confirm('will your password include special characters?');

  var hasNumeral = confirm('will your password include numerals?');


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



//selcet raondom character from array function
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
};


//
// mkae a function for generating password
function generatePassword () {
  var pwOptions = getPwOptions();
  var result = [];
  var characterOptions = [];
  var selectedCharacters = [];
  
  if (!pwOptions){
  return null;
  }
  //conditons to add a random elemet from selected character arrays
  if (pwOptions.hasUpperCase) {
    characterOptions =characterOptions.concat(upperCase);
    selectedCharacters.push(getRandom(upperCase));

  }
  if (pwOptions.hasLowerCase) {
    characterOptions =characterOptions.concat(lowerCase);
    selectedCharacters.push(getRandom(lowerCase));

  }
  if (pwOptions.hasSpecChar) {
    characterOptions =characterOptions.concat(specChar);
    selectedCharacters.push(getRandom(specChar));

  }
  if (pwOptions.hasNumeral) {
    characterOptions =characterOptions.concat(numeral);
    selectedCharacters.push(getRandom(numeral));

  }
   //password length from pwOptions and concat the characters into result
  for (var i = 0; i <pwOptions.length; i++) {
    var characterOptions = getRandom(selectedCharacters);
    result.push(characterOptions);
  }
  //condtion to set all choose character types are inculded
  for (var i = 0; i <selectedCharacters.length; i++) {
    result[i] = selectedCharacters[i];
  }
  return result.join('');
}
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

