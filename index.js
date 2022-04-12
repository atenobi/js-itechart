// functions for search data type
const IsDate = (inputedData) => {
  const dateRegExp =
    /(0?[1-9]|[12][0-9]|3[01])([\.\\\/-])(0?[1-9]|1[012])\2(((19|20)\d\d)|(\d\d))/gm;
  if (dateRegExp.test(inputedData)) {
    return true;
  } else {
    return false;
  }
};

// compiler for all searching functions
const typeDetector = (x) => {
  if (Array.isArray(x)) {
    console.log(x);
    console.log("this is a array");
  } else if (typeof x === "boolean") {
    console.log(x);
    console.log("this is a boolean");
  } else if (IsDate(x)) {
    console.log(x);
    console.log("this is a date");
  } else if (typeof x === "number") {
    console.log(x);
    console.log("this is a number");
  } else if (typeof x === "string") {
    console.log(x);
    console.log("this is a string");
  } else if (typeof x === "function") {
    console.log(x);
    console.log("this is a function");
  } else if (typeof x === "undefined") {
    console.log(x);
    console.log("this is a undefined");
  } else if (typeof x === "number" || x === null) {
    console.log(x);
    console.log("this is a null");
  }
};

// //bool isArray(obj)
// typeDetector([1, 2, 3]);

// //bool isBoolean(obj)
// typeDetector(false);
// typeDetector(true);
// typeDetector("false");

// //bool isDate(obj)
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

// //bool isNumber(obj)
// typeDetector(1);

// //bool isString(obj)
// typeDetector("hello");

// //bool isFunction(obj)
// const funcForTest = () => console.log("test");
// typeDetector(funcForTest);

// //bool isUndefined(obj)
// let y;
// typeDetector(y);

// //bool isNull(obj)
// let z = null;
// typeDetector(z);

// *** Working with arrays ***
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
  };
};

firstArrEl(numberArray);
firstArrEl(stringArray);
firstArrEl(objectArray);

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
    };
  };
  
  lastArrEl(numberArray);
  lastArrEl(stringArray);
  lastArrEl(objectArray);
  
//   // test another data types
//   lastArrEl(1);
//   lastArrEl('test');
//   lastArrEl(null);