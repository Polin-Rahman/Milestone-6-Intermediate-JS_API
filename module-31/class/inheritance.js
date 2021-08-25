class TeamMember {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {

    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }

    designation = 'Support web Dev';
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'Student Care web Dev';
}

class NeptuneDev {
    designation = 'App Dev';
    buildRoutine(version) {
        console.log(this.name, 'release app', version);
    }
}


const aamir = new Support('Amir Khan', 'BD', 4);
const salma = new Support('Salma Aktar', 'USA');

const alia = new StudentCare('Alia', 'India');
console.log(aamir);
console.log(alia);
