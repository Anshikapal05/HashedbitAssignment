function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(correctfn("I love my counntryy", "counntryy", "country!"));

