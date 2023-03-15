// Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

const isPrime = (num) => {
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

const specificPrimes = (startAt, nPrimes) => {
    const arr = [];

    for (i = startAt; i < nPrimes; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }

    return arr;
}

console.log(specificPrimes(1, 100));