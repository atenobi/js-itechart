//                                  *** Logger ***
// __________________________________________________________________________________________

// Create a simple logger function that logs a message in the console (message is a parameter).
// Example of execution: log("Hello World!");
// Example of output: Hello World!

const loggerFunc = (message) => {
  return message + "";
};

// __________________________________________________________________________________________

// Create another logger function that uses the previous one, and logs table-view row
// in console (column values are parameters).
// Example of execution: log("Hello", "World", "!");
// Example of output: Hello | World | !

const tableLogger = (...args) => {
  const result = args.join(" | ");

  return loggerFunc(result);
};

// __________________________________________________________________________________________

// Create another logger function that uses the previous one, and logs table-view row
// in the console (the first column is the current date and time by default,
// another column values are parameters).
// Example of execution: log("Hello", "World", "!");
// Example of output: 12/16/2016, 2:35:02 PM | Hello | World | !

const dateTableLogger = (...args) => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return tableLogger(date.toLocaleString("en-US", options), ...args);
};

export { loggerFunc, tableLogger, dateTableLogger };
