// Coding challenge #13: Find the maximum number in an array of numbers

const arr = [1, 2, 33, 2, 23, 25, 67, 45];

let maxNumber = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}

console.log(maxNumber);