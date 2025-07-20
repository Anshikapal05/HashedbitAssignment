function countWords(para) {
  //para.trim() removes extra spaces
  //\s+ is a regular expression that matches one or more whitespace characters 
  // (spaces, tabs, line breaks)

  
  return para.trim().split(/\s+/).length;
}


console.log(countWords("Spring is my favorite season because of the beautiful changes that happen in nature."));

