const student = {
    id: 101,
    money: 5000,
    name: 'abc',
    major: 'CSE',
    isRich: false,
    subjects: ['eng', 'math', 'eco', 'bio'],
    bestFriend: {
        name: 'xyz',
        major: 'CSE'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    trestDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

student.takeExam();

const remaning = student.trestDey(900);
console.log(remaning);