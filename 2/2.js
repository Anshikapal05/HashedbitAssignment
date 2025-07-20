function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}


console.log(calculator(10, 5, '+')); 
console.log(calculator(89,45, '-'));
console.log(calculator(10, 9, '*'));
console.log(calculator(10, 0, '/'));
