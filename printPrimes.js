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

const arr = [];

for (i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        arr.push(i);
    }
}

for (i = 0; i < arr.length; i++) {
    console.log(i + 1 + "------->" + arr[i]);
}