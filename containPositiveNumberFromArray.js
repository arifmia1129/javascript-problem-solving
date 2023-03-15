// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

const arr = [1, 2, 3, -44, -1, -10, 3, 6, 90];

const newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);