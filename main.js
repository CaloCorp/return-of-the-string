/*******************
 * YOUR CODE HERE! *
 *******************/

const yell= function (str){
return str + '!'
}

const getFirstCharacter = function (str){

  return str[0]
}

const getLastCharacter = function (str){

  return str[str.length-1]
}
 const getOneCharacter = function (str, num){

  return str[num]
 }

const getTwoCharacters = function (str, num1, num2){

  return str[num1] + str[num2]

}

const makeCapitalized = function (str){

  return str.toUpperCase()
}
 const yellLouder= function (str){

  return str.toUpperCase() + '!!!'

 }

 const getInitials = function (str){
let character = str.indexOf(' ')

return str[0] + '.' + str[character + 1] + '.'

 }
/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
