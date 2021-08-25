const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengts = friends.map(friend => friend.length);
//console.log(fLengts);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'silver' },
    { name: 'sticky node', price: 50, color: 'pink' },
    { name: 'glass', price: 100, color: 'white' }
]

const productsName = products.map(product => product.name);
const productsPrice = products.map(p => p.price);
console.log(productsName);
console.log(productsPrice);

products.map(product => console.log(product));
//or can use for each (if no output/return is need)
products.forEach(product => console.log(product));
