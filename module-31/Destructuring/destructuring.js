const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 9000,
    phone: '0100011111',
    address: 'Chanpur',
    dress: 'silver'
};

// Destructuring Object to extract values to variables
const { phone, price, dress, id } = fish;

console.log(phone);
console.log(id);
console.log(dress);

const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'xyz',
        food: 'abc'
    },
    web: {
        work: 'web development',
        employee: 22,
        framework: 'react'
    }
};

const { work, framework } = company.web;

console.log(work, framework);