const powNumbers = (x, y) => {
//   console.log(x * y);
  return x * y;
};

const asyncExecution = (arg1, arg2) =>
  setTimeout(() => powNumbers(arg1, arg2), 500);

// asyncExecution(2, 2);

module.exports = { powNumbers, asyncExecution };
