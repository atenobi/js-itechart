//                                  *** Logger tests ***
// __________________________________________________________________________________________

const { loggerFunc, tableLogger } = require("../js_files/logger_functions");

describe("loggerFunc", () => {
  test('should simple show string in console (output: "inserted string")', () => {
    expect(loggerFunc("Hello")).toBe("Hello");
  });
});

describe("tableLogger", () => {
  test('should separate inserted arguments by "|" symbol (output: "argument_1" "|" "argument_2")', () => {
    expect(tableLogger("Hello", "world")).toBe("Hello | world");
  });
});
