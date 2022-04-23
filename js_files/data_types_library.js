//                                  *** Data types library ***
// __________________________________________________________________________________________

// functions for search data type
const myIsArray = (inputedData) => Array.isArray(inputedData);

const myIsBoolean = (inputedData) => typeof inputedData === "boolean";

const myIsDate = (inputedData) => {
  const dateRegExp =
    /(0?[1-9]|[12][0-9]|3[01])([\.\\\/-])(0?[1-9]|1[012])\2(((19|20)\d\d)|(\d\d))/gm;
  return dateRegExp.test(inputedData);
};

const myIsNumber = (inputedData) => typeof inputedData === "number";

const myIsString = (inputedData) => typeof inputedData === "string";

const myIsFunction = (inputedData) => typeof inputedData === "function";

const myIsUndefined = (inputedData) => typeof inputedData === "undefined";

const myIsNull = (inputedData) =>
  typeof inputedData === "number" || inputedData === null ? true : false;

module.exports = {
  myIsArray,
  myIsBoolean,
  myIsDate,
  myIsFunction,
  myIsNull,
  myIsNumber,
  myIsString,
  myIsUndefined,
};
