const numbers = [23, 65, 99, 21, 34, 200];
console.log(numbers);
// extract elements from array
console.log(...numbers);

const max = Math.max(23, 99, 65);
console.log(max);
// extract elements from array
const maxInArray = Math.max(...numbers);
console.log(maxInArray);

// copy array elemets using spread operator (...)

const numbers2 = [...numbers];
const numbers2 = [22, ...numbers, 66];
