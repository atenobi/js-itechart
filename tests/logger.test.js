//                                  *** Logger tests ***
// __________________________________________________________________________________________

const {
    loggerFunc,
    tableLogger,
} = require("../js_files/logger_functions");

test('function must show string in console', ()=> {
    expect(loggerFunc('Hello')).toBe('Hello');
});
  
test('function must separate her arguments by "|" symbol', () => {
    expect(tableLogger("Hello","world")).toBe("Hello | world");
});