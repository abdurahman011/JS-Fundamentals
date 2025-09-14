const factorial = (n) => {
  if (isNaN(n)) {
    return 1;
  }
  if (n < 0) {
    return -1; // Factorial is not defined for negative numbers.
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const num = parseInt(process.argv[2]);
console.log(factorial(num));
