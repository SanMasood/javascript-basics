const getNthElement = (index, array) => {
  // your code here
  
let l=array.length;
if(index%l==0)
  return array[0];

else if (index%l==1)
    return array[1];
    
else if (index%l==2)
      return array[2];
      
      else if (index%l==3)
return array[3];
        
 else return 0;
  
};

const arrayToCSVString = array => {
  // your code here
};

const csvStringToArray = string => {
  // your code here
};

const addToArray = (element, array) => {
  // your code here
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
  // your code here
};

const numbersToStrings = numbers => {
  // your code here
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
