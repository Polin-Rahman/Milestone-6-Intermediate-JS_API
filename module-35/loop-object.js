const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};

/* 
for(let i=0; i<10; i++){}
for(const num of numbers){} //arrray
for(const property in student){} //object
 */

for (const prop in bottle) {
    // console.log(bottle[prop]);
}

const keys = Object.keys(bottle);
//console.log(keys);

for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advance

const entries = Object.entries(bottle);
//console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}