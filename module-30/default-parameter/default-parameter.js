/* default parameter, if any reason 2nd parameter is missed; default value set as 0 */

function add(num1, num2 = 0) {
    const total = num1 + num2;
    return total;
}

const result = add(15, 15);
console.log(result);