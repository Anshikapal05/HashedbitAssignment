function digitSum(n) {
  while (n >= 10) {
    n = n.toString().split('').reduce((a, b) => a + +b, 0);
  }
  return n;
}

console.log(digitSum(456)); 
