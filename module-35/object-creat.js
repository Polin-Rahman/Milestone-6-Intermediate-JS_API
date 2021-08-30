// 1. using object literel
const student = { name: 'Sakib', job: 'criketer' };

// 2. object constructor
const person = new Object();
console.log(person);

// 3. creat
const human = Object.create(null);
console.log(human);

// 4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peop = new People('pol', 12);
console.log(peop);

// 5. function
function Man(name) {
    this.name = name;
}

const man = new Man('someone');