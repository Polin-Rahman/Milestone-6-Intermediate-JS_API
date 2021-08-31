const pol = {
    id: 101,
    money: 5000,
    name: 'pol',
    treatDey: function (expense, tips, tax) {
        this.money = this.money - expense - tips - tax;
        console.log(this);
        return this.money;
    }
}

const peal = {
    id: 102,
    money: 6000,
    name: 'peal',
}
// call
pol.treatDey.call(peal, 500, 100, 50);

//apply
pol.treatDey.apply(peal, [500, 100, 50]);


