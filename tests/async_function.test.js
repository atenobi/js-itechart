const { powNumbers, asyncExecution } = require("../js_files/async_function");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

// synchronus function worker
describe("execution of simple function", () => {

  test("test worker function(sync)", () => {
    expect(powNumbers(2, 3)).toBe(6);
    expect(powNumbers(2, 5)).toBe(10);
  });
});

// async execution of worker
describe("async execution of simple function", () => {
  asyncExecution(2, 2);

  test("test async function", () => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });
});
