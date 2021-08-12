function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i * sum(i - 1);
}
console.log(sum(6))
let fact = 1;
for (let i = 6; i >= 1; i--) {
    fact = fact * i;
}
console.log(fact);
// recursive function er bitor theke same function ke call dete hobe,,,! ata kei recursive bolbo apatoto...!
function factorail(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorail(i - 1);
}
console.log(factorail(6));