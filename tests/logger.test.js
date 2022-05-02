//                                  *** Logger tests ***
// __________________________________________________________________________________________

import {
  loggerFunc,
  tableLogger,
  dateTableLogger,
} from "../js_files/logger_functions";

// logger - function which show in console inserted string
describe("loggerFunc", () => {
  test('should simple show string in console (output: "inserted string")', () => {
    expect(loggerFunc("Hello")).toBe("Hello");
  });

  test('should convert number to string (output: "inserted number")', () => {
    expect(loggerFunc(2022)).toBe("2022");
  });
});

// saperate arguments by "|" and join to one sting
describe("tableLogger", () => {
  test('should separate inserted arguments by "|" symbol (output: "argument_1" "|" "argument_2")', () => {
    expect(tableLogger("Hello", "world")).toBe("Hello | world");
  });

  test('should separate inserted arguments by "|" symbol (output: "argument_1" "|" "argument_2")', () => {
    expect(tableLogger("Hello", null)).toBe("Hello | ");
  });

  test('should separate inserted arguments by "|" symbol (output: "argument_1" "|" "argument_2")', () => {
    expect(tableLogger("Hello", false)).toBe("Hello | false");
  });
});

// show actual date join with arguments to one string
describe("dateTableLogger-show actual date join with arguments to one string", () => {
  test("test with regexp date", () => {
    expect(dateTableLogger()).toMatch(
      /(0?[1-9]|[12][0-9]|3[01])([\.\\\/-])(0?[1-9]|1[012])\2(((19|20)\d\d)|(\d\d))/gm
    );
  });

  test("test insarted string argument", () => {
    expect(dateTableLogger("Hello")).toContain("Hello");
  });
});
