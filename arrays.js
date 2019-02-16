chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element){
  let newArr = [element, ...array] ;
  return newArr;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  /*
  let newArr = array.unshift(element);
  return newArr;
  */
  
  array.unshift(element);
  return array;
}


function destructivelyAddElementToEndOfArray (array, element){
  /*
  let newArr = array.push(element);
  return newArr;
  */
  array.push(element);
  return array;
}

function addElementToEndOfArray(array, element){
  /*
  array.unshift(element);
  return array;
  */
  let newArr = [...array, element] ;
  return newArr;
  
}


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.unshift();
  return array;
}


function removeElementFromBeginningOfArray(array){
  let newArr = array.slice(1);
  return newArr;
}


function removeElementFromEndOfArray(array){
  let newArr = array.pop()
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array){
  let newArr = array.pop
  return newArr;
}

function accessElementInArray(array,  index){
  return array[index]
}
