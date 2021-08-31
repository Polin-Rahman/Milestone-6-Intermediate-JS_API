const pol = {
    id: 101,
    money: 5000,
    name: 'pol',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const peal = {
    id: 102,
    money: 6000,
    name: 'peal',
}

const pealTreatDay = pol.treatDey.bind(peal);
pealTreatDay(500);

