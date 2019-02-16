chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
/*
function addElementToBeginningOfArray (array, element){
  let newArr = [element, ...array] ;
  return newArr;
}*/

function destructivelyAddElementToBeginningOfArray (array, element){
  /*
  let newArr = array.unshift(element);
  return newArr;
  */
  
  array.unshift(element);
  return array
}
/*

function destructivelyAddElementToEndOfArray (array, element){
  let newArr = array.push(element);
  return newArr;
}

function addElementToEndOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  let newArr = array.shift;
  return newArr;
}

function removeElementFromBeginningOfArray(array){
  let newArr = array.slice(1);
  return newArr;
}

function removeElementFromEndOfArray(array){
  let newArr = array.pop()
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  let newArr = array.pop
  return newArr;
}*/
