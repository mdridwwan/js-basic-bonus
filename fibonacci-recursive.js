// const fibo = [0, 1];
// for (let i = 2; i <= 6; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2]
// }
// console.log(fibo);
// 0+1+1+2+3+5+8+13
function fibo(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    // recursive same function k call dete hobe...!
    return fibo(i - 1) + fibo(i - 2);
}
console.log(fibo(6))