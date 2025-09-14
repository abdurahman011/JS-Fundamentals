const factorial = (n) => {
  if (isNaN(n) || n < 0) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const num = parseInt(process.argv[2]);

if (process.argv.length < 3) {
  console.log("No argument");
} else if (isNaN(num)) {
  console.log("No argument");
} else {
  console.log(factorial(num));
}
