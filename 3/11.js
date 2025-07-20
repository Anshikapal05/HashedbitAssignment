const input = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
};

const output = {};

for (let student in input) {
  const marks = Object.values(input[student]);
  const avg = marks.reduce((sum, val) => sum + val, 0) / marks.length;
  output[student] = { average: Math.floor(avg) };
}

console.log(output);

