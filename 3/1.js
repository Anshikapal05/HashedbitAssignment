const states = ['Uttar Pradesh','Madhya Pradesh', 'Andhra Pradesh','Delhi', 'Odisha', 'Bihar', 'Rajasthan', 'Assam', 'Gujarat','Hyderabad','Uttarakhand'];

const filteredStates = states.filter(state => !/^[aeiou]/i.test(state));
console.log(filteredStates);
