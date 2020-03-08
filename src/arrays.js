const getNthElement = (index, array) => {
  // your code here
 /* 
let l=array.length;
if(index%l==0)
  return array[0];

else if (index%l==1)
    return array[1];
    
else if (index%l==2)
      return array[2];
      
      else if (index%l==3)
return array[3];
        
 else return 0;*/
 return array[index % array.length];
  
};

const arrayToCSVString = array => { //array to string
  // your code here
  return (array.toString());
};

const csvStringToArray = string => { //string to array
  // your code here 
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element); //unshift() adds to beginning of array
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.join().split(','); //Omit the space, also can do numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  // your code here
return strings.map(f=>{ 
    return f.toUpperCase();
   });
};

const reverseWordsInArray = strings => {
  // your code here
 return strings.map(f=>{ 
    return f.split("").reverse().join("").split(" ").reverse().join(" ");
   });
  // return newArray;
 /* strings.map(func=>{
    return func.reverse().split(", ");
  }); */
};

const onlyEven = numbers => {
  // your code here
  return (numbers.filter(evennum => evennum%2==0));

};

const removeNthElement2 = (index, array) => {
  // your code here
  
 return array.slice(0, index).concat(array.slice(index + 1, array.length));
};

const elementsStartingWithAVowel = strings => {
  // your code here
  //Use filter()

   let newArray=strings.filter(element=>
  element.startsWith("a") || element.startsWith("e") || element.startsWith("i") || element.startsWith("o") || element.startsWith("u"));
return (newArray); 
};

const removeSpaces = string => {
  // your code here
  return string.split("").filter(element=> element !== " ").join("");
};

const sumNumbers = numbers => {
  // your code here
  let accumulator=0;
  const reducer = (accumulator, numbers) => accumulator + numbers;
  return numbers.reduce(reducer);

};

const sortByLastLetter = strings => {
  // your code here
  //reverse string and then sort, unreverse ?
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
