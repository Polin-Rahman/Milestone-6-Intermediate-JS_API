const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'silver' },
    { name: 'sticky node', price: 50, color: 'pink' },
    { name: 'glass', price: 100, color: 'white' }
];
const expensive = products.filter(product => product.price > 100);
console.log(expensive);

const colorItem = products.find(product => product.color == 'pink');
console.log(colorItem);
