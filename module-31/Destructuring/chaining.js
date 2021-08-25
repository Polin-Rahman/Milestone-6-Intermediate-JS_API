// declerar variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;

console.log(x, b);

// destructing array
const [p, q] = [42, 37, 91, 86];
console.log(p, q);

const [best, worst] = ['xyz', 'abc'];

const { sky, color } = { sky: 'blues', soil: 'muddy', color: 'red', money: 500 };

//nested object
const company = {
    job: 'developer',
    position:
    {
        web: {
            frontend: 'js',
            backend: 'php'
        },
        app: 'android'
    },
    salary: '20000'
};

console.log(company.position.web.frontend);