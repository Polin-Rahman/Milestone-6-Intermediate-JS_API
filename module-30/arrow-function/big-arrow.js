/* single line operation : no return; Implicit Return */

// single parameter = no () or can use ()
const fiveTimes = num => num * 5;

// no perameter = ()
const getName = () => 'Pol R';


/* multi line operation : recquired {} and must need to return */

// multiple parameter = ()
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const mul = x * y;
    const output = sum + diff + mul;

    return output;
}

