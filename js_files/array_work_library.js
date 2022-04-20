//                                  *** Working with arrays ***
// __________________________________________________________________________________________

// first element in array function
const firstArrEl = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    return array[0];
  } else if (!Array.isArray(array)) {
    return `${array} - it's not array`;
  } else if (!array.length) {
    return `${array} - you\`r array have no elements`;
  }
};

// last element in array function
const lastArrEl = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    return array[array.length - 1];
  } else if (!Array.isArray(array)) {
    return `${array} - it's not array`;
  } else if (!array.length) {
    return `${array} - you\`r array have no elements`;
  }
};

// // make new array method skip (dismiss from index)
function mySkip  (arr, index) {
  let result = [];
  if (index < arr.length - 1) {
    result = arr.slice(index - 1);
    return result;
  } else {
    return "This array has no such index.";
  }
};

// // make new array method take (take to index)
function myTake (arr, index) {
  let result = [];
  if (index < arr.length - 1) {
    result = arr.slice(0, index);
    return result;
  } else {
    return "This array has no such index.";
  }
};

// Chaining: Implement the ability to create chains: asChain(arr).skip(func).take(func)
// https://gohtml.ru/js/142-zamyikaniya-v-javascript

function Chain(array) {
  var result = array;
 
  this.result = function () { return result };
 
  this.skip = function (index) {
      result = this.skipInd(result, index);
    return this;
  };
 
  this.take = function (index) {
     result = this.takeInd(result, index);
    return this;
  };
}
 
Chain.prototype = new function MathLibPrototype() {
  this.skipInd = function (arr, index) {
    let result = [];
    if (index < arr.length - 1) {
      result = arr.slice(index - 1);
      return result;
    } else {
      return "This array has no such index.";
    }
  };
 
   this.takeInd = function (arr, index) {
    let result = [];
    if (index < arr.length - 1) {
      result = arr.slice(0, index);
      return result;
    } else {
      return "This array has no such index.";
    }
  };
};

function asChain(array) {
   return new Chain(array);
}
