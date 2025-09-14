const factorial = (n) => {
  return isNaN(n) || n === 0 ? 1 : n * factorial(n - 1);
};

const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log("No argument");
} else {
  console.log(factorial(num));
}
