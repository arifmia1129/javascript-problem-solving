// Create a function that will return a Boolean specifying if a number is prime

function primeNumber(num) {
    if (num < 2) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(primeNumber(4));