console.log("module2 file started");

// addition
function add(a, b) {
  return a + b;
}

// subtraction
function subtract(a, b) {
  return a - b;
}

// multiplication
function multiply(a, b) {
  return a * b;
}

// division
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// power
function power(a, b) {
  return Math.pow(a, b);
}

// factorial
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// fibonacci
function fibonacci(n) {
  if (n < 0) {
    throw new Error("Fibonacci is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return n;
  }
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// gcd
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// lcm
function lcm(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("LCM is not defined for zero");
  }
  return Math.abs(a * b) / gcd(a, b);
}

// isPrime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// isEven
function isEven(n) {
  return n % 2 === 0;
}

// isOdd
function isOdd(n) {
  return n % 2 !== 0;
}

// isPalindrome
function isPalindrome(n) {
  const str = n.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// isArmstrong
function isArmstrong(n) {
  const str = n.toString();
  const numDigits = str.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(str[i]), numDigits);
  }
  return sum === n;
}

module.exports = {
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
};
