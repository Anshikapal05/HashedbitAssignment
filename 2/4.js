function func(n1, n2) {
  let s1 = n1.toString().split('').reverse();
  let s2 = n2.toString().split('').reverse();
  let length = Math.max(s1.length, s2.length);

  let sum = 0;

  for (let i = 0; i < length; i++) {
    let digit1 = parseInt(s1[i] || 0);
    let digit2 = parseInt(s2[i] || 0);
    
    sum += digit1 * digit2;
  }

  return sum;
}


console.log(func(6, 34));     
console.log(func(123, 456));  
