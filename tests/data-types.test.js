//                                  *** Data types tests ***
// __________________________________________________________________________________________

const {
  myIsArray,
  myIsBoolean,
  myIsDate,
  myIsFunction,
  myIsNull,
  myIsNumber,
  myIsString,
  myIsUndefined,
} = require("../js_files/data_types_library");

// array test
test("array check, function must return boolean result", () => {
  expect(myIsArray([])).toBe(true);
  expect(myIsArray([1, 2])).toBe(true);

  expect(myIsArray("")).toBe(false);
  expect(myIsArray({})).toBe(false);
  expect(myIsArray(null)).toBe(false);
});

// boolean test
test("boolean check, function must return boolean result", () => {
  expect(myIsBoolean(true)).toBe(true);
  expect(myIsBoolean(false)).toBe(true);

  expect(myIsBoolean([])).toBe(false);
  expect(myIsBoolean("")).toBe(false);
  expect(myIsBoolean({})).toBe(false);
  expect(myIsBoolean(null)).toBe(false);
});

// date test
test("date check, function must return boolean result", () => {
  expect(myIsDate("01.01.01")).toBe(true);
  expect(myIsDate("01.01.2001")).toBe(true);
  expect(myIsDate("01/01/01")).toBe(true);
  expect(myIsDate("01/01/2001")).toBe(true);
  expect(myIsDate("01-01-2001")).toBe(true);

  expect(myIsDate(true)).toBe(false);
  expect(myIsDate(false)).toBe(false);
  expect(myIsDate([])).toBe(false);
  expect(myIsDate("")).toBe(false);
  expect(myIsDate({})).toBe(false);
  expect(myIsDate(null)).toBe(false);
});

// function test
test("function check, function must return boolean result", () => {
  expect(myIsFunction(function () {})).toBe(true);

  expect(myIsFunction("")).toBe(false);
  expect(myIsFunction({})).toBe(false);
  expect(myIsFunction(null)).toBe(false);
});

// null test
test("function check, function must return boolean result", () => {
  expect(myIsNull(null)).toBe(true);

  expect(myIsNull("")).toBe(false);
  expect(myIsNull({})).toBe(false);
});

// number test
test("function check, function must return boolean result", () => {
  expect(myIsNumber(1)).toBe(true);
  expect(myIsNumber(432323)).toBe(true);
  expect(myIsNumber(-3)).toBe(true);

  expect(myIsNumber("1")).toBe(false);
  expect(myIsNumber({ x: 1 })).toBe(false);
  expect(myIsNumber(null)).toBe(false);
  expect(myIsNumber(undefined)).toBe(false);
});

// string test
test("function check, function must return boolean result", () => {
  expect(myIsString("Hello")).toBe(true);
  expect(myIsString("432323")).toBe(true);
  expect(myIsString("-3")).toBe(true);

  expect(myIsString(1)).toBe(false);
  expect(myIsString({ x: 1 })).toBe(false);
  expect(myIsString(null)).toBe(false);
  expect(myIsString(undefined)).toBe(false);
});

// undifined test
test("function check, function must return boolean result", () => {
  expect(myIsUndefined(undefined)).toBe(true);

  expect(myIsUndefined("1")).toBe(false);
  expect(myIsUndefined({ x: 1 })).toBe(false);
  expect(myIsUndefined(null)).toBe(false);
});
