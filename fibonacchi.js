// Print the first 10 Fibonacci numbers

let f0 = 0;
let f1 = 1;

for (let i = 2; i <= 10; i++) {
    let febo = f0 + f1;
    console.log(febo);

    f0 = f1;
    f1 = febo;
}