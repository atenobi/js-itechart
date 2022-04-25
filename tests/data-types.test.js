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
describe("myIsArray", () => {
  test("should check value and return boolean result(array=true)", () => {
    expect(myIsArray([])).toBe(true);
    expect(myIsArray([1, 2])).toBe(true);
  });
  
  test("should check value and return boolean result(not array=false)", () => {
    expect(myIsArray("")).toBe(false);
    expect(myIsArray({})).toBe(false);
    expect(myIsArray(null)).toBe(false);
  });
});

// boolean test
describe("myIsBoolean", () => {
  test("should check and return boolean result(boolean=true)", () => {
    expect(myIsBoolean(true)).toBe(true);
    expect(myIsBoolean(false)).toBe(true);
  });

  test("should check and return boolean result(not boolean=false)", () => {
    expect(myIsBoolean([])).toBe(false);
    expect(myIsBoolean("")).toBe(false);
    expect(myIsBoolean({})).toBe(false);
    expect(myIsBoolean(null)).toBe(false);
  });
});

// date test
describe("myIsDate", () => {
  test("should check and return boolean result(date=true)", () => {
    expect(myIsDate("01.01.01")).toBe(true);
    expect(myIsDate("01.01.2001")).toBe(true);
    expect(myIsDate("01/01/01")).toBe(true);
    expect(myIsDate("01/01/2001")).toBe(true);
    expect(myIsDate("01-01-2001")).toBe(true);
  });

  test("should check and return boolean result(not date=false)", () => {
    expect(myIsDate(true)).toBe(false);
    expect(myIsDate(false)).toBe(false);
    expect(myIsDate([])).toBe(false);
    expect(myIsDate("")).toBe(false);
    expect(myIsDate({})).toBe(false);
    expect(myIsDate(null)).toBe(false);
  });
});

// function test
describe("myIsFunction", () => {
  test("should check and return boolean result(function=true)", () => {
    expect(myIsFunction(function () {})).toBe(true);
  });

  test("should check and return boolean result(not function=false)", () => {
    expect(myIsFunction("")).toBe(false);
    expect(myIsFunction({})).toBe(false);
    expect(myIsFunction(null)).toBe(false);
  });
});

// null test
describe("myIsNull", () => {
  test("should check and return boolean result(null=true)", () => {
    expect(myIsNull(null)).toBe(true);
  });

  test("should check and return boolean result(not null=false)", () => {
    expect(myIsNull("")).toBe(false);
    expect(myIsNull({})).toBe(false);
  });
});

// number test
describe("myIsNumber", () => {
  test("should check and return boolean result(number=true)", () => {
    expect(myIsNumber(1)).toBe(true);
    expect(myIsNumber(432323)).toBe(true);
    expect(myIsNumber(-3)).toBe(true);
  });

  test("should check and return boolean result(not number=false)", () => {
    expect(myIsNumber("1")).toBe(false);
    expect(myIsNumber({ x: 1 })).toBe(false);
    expect(myIsNumber(null)).toBe(false);
    expect(myIsNumber(undefined)).toBe(false);
  });
});

// string test
describe("myIsString", () => {
  test("should check and return boolean result(string=true)", () => {
    expect(myIsString("Hello")).toBe(true);
    expect(myIsString("432323")).toBe(true);
    expect(myIsString("-3")).toBe(true);
  });

  test("should check and return boolean result(not string=false)", () => {
    expect(myIsString(1)).toBe(false);
    expect(myIsString({ x: 1 })).toBe(false);
    expect(myIsString(null)).toBe(false);
    expect(myIsString(undefined)).toBe(false);
  });
});

// undifined test
describe("myIsUndefined", () => {
  test("should check and return boolean result(undefined=true)", () => {
    expect(myIsUndefined(undefined)).toBe(true);
  });

  test("should check and return boolean result(not undefined=false)", () => {
    expect(myIsUndefined("1")).toBe(false);
    expect(myIsUndefined({ x: 1 })).toBe(false);
    expect(myIsUndefined(null)).toBe(false);
  });
});
