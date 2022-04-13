// functions for search data type
const IsArray = (inputedData) => (Array.isArray(inputedData) ? true : false);

const IsBoolean = (inputedData) =>
  typeof inputedData === "boolean" ? true : false;

const IsDate = (inputedData) => {
  const dateRegExp =
    /(0?[1-9]|[12][0-9]|3[01])([\.\\\/-])(0?[1-9]|1[012])\2(((19|20)\d\d)|(\d\d))/gm;
  if (dateRegExp.test(inputedData)) {
    return true;
  } else {
    return false;
  }
};

const IsNumber = (inputedData) =>
  typeof inputedData === "number" ? true : false;

const IsString = (inputedData) =>
  typeof inputedData === "string" ? true : false;

const IsFunction = (inputedData) =>
  typeof inputedData === "function" ? true : false;

const IsUndefined = (inputedData) =>
  typeof inputedData === "undefined" ? true : false;

const IsNull = (inputedData) =>
  typeof inputedData === "number" || inputedData === null ? true : false;

// compiler for all searching functions
const typeDetector = (x) => {
  if (IsArray(x)) {
    console.log(x);
    console.log("this is a array");
  } else if (IsBoolean(x)) {
    console.log(x);
    console.log("this is a boolean");
  } else if (IsDate(x)) {
    console.log(x);
    console.log("this is a date");
  } else if (IsNumber(x)) {
    console.log(x);
    console.log("this is a number");
  } else if (IsString(x)) {
    console.log(x);
    console.log("this is a string");
  } else if (IsFunction(x)) {
    console.log(x);
    console.log("this is a function");
  } else if (IsUndefined(x)) {
    console.log(x);
    console.log("this is a undefined");
  } else if (IsNull(x)) {
    console.log(x);
    console.log("this is a null");
  }
};

// // bool isArray(obj)
// typeDetector([1, 2, 3]);

// // bool isBoolean(obj)
// typeDetector(false);
// typeDetector(true);
// typeDetector("false");

// // bool isDate(obj)
// typeDetector("2022-01-01");
// // date for test
// // typeDetector("2022\01\01");
// // typeDetector("2022/01/01");
// // typeDetector("2022.01.01");
// // typeDetector("01.01.2002");
// // typeDetector("20.01.2022");

// // date with errors for test
// // typeDetector("203.01.2022");
// // typeDetector("20.010.2022");
// // typeDetector("20.01.20220");
// // typeDetector("20 01 2console.log(
// // typeDetector("01.2022");
// // typeDetector("1");

// // bool isNumber(obj)
// typeDetector(1);
// typeDetector(1253);
// typeDetector(0);
// typeDetector(NaN);

// // bool isString(obj)
// typeDetector("hello");

// // bool isFunction(obj)
// const funcForTest = () => console.log("test");
// typeDetector(funcForTest);

// // bool isUndefined(obj)
// let y;
// typeDetector(y);
// typeDetector(undefined);

// // bool isNull(obj)
// typeDetector(null);

// __________________________________________________________________________________________
//                                  *** Working with arrays ***
// __________________________________________________________________________________________
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ["a", "b", "c", "d", "e", "f", "g"];
const objectArray = [
  { a: 1 },
  { b: 2 },
  { c: 3 },
  { d: 4 },
  { e: 5 },
  { f: 6 },
];

// first element in array function
const firstArrEl = (array) => {
  if (Array.isArray(array)) {
    console.log(array[0]);
  } else {
    console.log(`${array} - it's not array`);
  }
};

// firstArrEl(numberArray);
// firstArrEl(stringArray);
// firstArrEl(objectArray);

// // test another data types
// firstArrEl(1);
// firstArrEl('test');
// firstArrEl(null);

// last element in array function
const lastArrEl = (array) => {
  if (Array.isArray(array)) {
    console.log(array[array.length - 1]);
  } else {
    console.log(`${array} - it's not array`);
  }
};

// lastArrEl(numberArray);
// lastArrEl(stringArray);
// lastArrEl(objectArray);

//   // test another data types
//   lastArrEl(1);
//   lastArrEl('test');
//   lastArrEl(null);

// // make new array method skip (dismiss from index)
const skip = (arr, index) => {
  let result = [];
  if (index < arr.length - 1) {
    result = arr.slice(index - 1);
    console.log(result);
  } else {
    console.log("This array has no such index.");
  }
  return result;
};

// // newArr skip(arr, number)
// skip(numberArray, 2);
// skip(numberArray, -2);
// skip(stringArray, 4);
// skip(objectArray, 6);

// // make new array method take (take to index)
const take = (arr, index) => {
  let result = [];
  if (index < arr.length - 1) {
    result = arr.slice(0, index);
    console.log(result);
  } else {
    console.log("This array has no such index.");
  }
  return result;
};

// // newArr take(arr, number)
// take(numberArray, 2);
// take(numberArray, -2);
// take(stringArray, 4);
// take(objectArray, 6);

//Chaining: Implement the ability to create chains: asChain(arr).skip(func).take(func) ???

function asChain(arr) {
  let array = arr;

  this.Skip = (index) => {
    array = skip(array, index);
    return this;
  };

  this.Take = (index) => {
    array = take(array, index);
    return this;
  };

  return this;
};

asChain(numberArray).Skip(2).Take(6);