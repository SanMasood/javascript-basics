const negate = a => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  if (a &&b){
  return true;
  }
  else return false;
};

const either = (a, b) => {
  // your code here
  if (a || b){
    return true;
  }
  else return false;
};

const none = (a, b) => {
  // your code here
  if (!a && !b){
    return true;
  }
  else return false;
  
};

const one = (a, b) => {
  // your code here
  if ((a && !b) || (!a && b)){
    return true;
  }
  else return false; 
};

const truthiness = a => {
  // your code here
  if (!a){
    return false;

  } else return true;
};

const isEqual = (a, b) => {
  // your code here
  if (a==b){
    return true;
  }
  else return false;
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a>b)
  return true;
  else return false;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  if (a<=b)
  return true;
  else return false;
};

const isOdd = a => {
  // your code here
  if (a%2==0)
  return false;
  else return true;
};

const isEven = a => {
  if (a%2==0)
  return true;
  else return false;

  // your code here
};

const isSquare = a => {
  // your code here
  if (a>=0 && Math.sqrt(a) % 1 === 0)
    return true;
    else return false;
  
};

const startsWith = (char, string) => {
  if (string.startsWith(char))
    return true;
    else return false;
    
  // your code here
};

const containsVowels = string => {
  // your code here
/*
  let vowelArray=[a,A,e,E,i,I,o,O,u,U];
  
  for (let i=0;i<vowelArray.length; i++){
    if (string.includes(vowelArray[i])){
      return true;
    }
    else return false;
  }*/

  if (string.includes('a') || string.includes('e') || string.includes('i') || string.includes('o') || string.includes('u') || string.includes('O'))
  return true;
  else return false;
};

const isLowerCase = string => {
  // your code here
  if (string === string.toLowerCase())
  return true;
  else return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
