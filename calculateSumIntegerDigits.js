// Calculate the sum of digits of a positive integer number

function calculateSumOfIntegerDigits(num) {
    const stringNumber = num.toString();

    let sum = 0;

    for (const digit of stringNumber) {
        sum += parseInt(digit);
    }

    return sum;
}

console.log(calculateSumOfIntegerDigits(1234));