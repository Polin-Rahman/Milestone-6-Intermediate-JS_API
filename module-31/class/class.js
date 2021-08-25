class Support {
    name;
    designation = 'Support web Dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

const aamir = new Support('Amir Khan', 'BD');
const salma = new Support('Salma Aktar', 'USA');
console.log(aamir);
console.log(salma);

aamir.startSession();