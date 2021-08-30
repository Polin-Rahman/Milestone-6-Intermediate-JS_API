const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};

// getting all properties name
const keys = Object.keys(bottle);
//console.log(keys);

// getting all values
const values = Object.values(bottle);
//console.log(values);

// pair
const pairs = Object.entries(bottle);
//console.log(pairs);

/* fix this object, delete is not work with it and no addition but change possible */
Object.seal(bottle);

// like seal but no change
Object.freeze(bottle);

// change property
bottle.price = 100;

// delete property
delete bottle.isClean;
console.log(bottle);

