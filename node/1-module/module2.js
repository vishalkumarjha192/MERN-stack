const {
  add,
  subtract,
  multiply,
  divide,
  power,
  factorial,
  fibonacci,
  gcd,
  lcm,
  isPrime,
  isEven,
  isOdd,
  isPalindrome,
  isArmstrong,
} = require("./math");

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(5, 3));
console.log("Multiplication:", multiply(5, 3));
console.log("Division:", divide(5, 3));
console.log("Power:", power(5, 3));
console.log("Factorial:", factorial(5));
console.log("Fibonacci:", fibonacci(5));
console.log("GCD:", gcd(5, 3));
console.log("LCM:", lcm(5, 3));
console.log("Is Prime:", isPrime(5));
console.log("Is Even:", isEven(5));
console.log("Is Odd:", isOdd(5));
console.log("Is Palindrome:", isPalindrome(5));
console.log("Is Armstrong:", isArmstrong(153));
