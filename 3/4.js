let str = "This is the third Hashedbit Assignment";
let vowels = str.match(/[aeiou]/gi)?.length || 0;
let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;

console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);

