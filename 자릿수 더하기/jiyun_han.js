// function solution(n) {
//     let str = String(n).split("");

//     let sum = 0;
//     for (let s of str) {
//         let n = Number(s);
//         sum += n;
//     }

//     return sum;
// }

function solution(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        // 123.4 -> +4
        // 12.3 -> +3
        // 1.2 -> +2
        // 0.1 -> +1

        n = Math.floor(n / 10);
        // 123.4 -> .4 버림, 123
        // 12.3 -> .3 버림, 12
        // 1.2 -> .2 버림, 1
        // 0.1 - > .1 버림, 0 -> while문 빠져나감
    }
    console.log(sum);
    return sum;
}

solution(1234);
