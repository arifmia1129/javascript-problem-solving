// Reverse an array

const reverseArray = (arr) => {
    const newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

const arr = [1, 2, 3];

console.log(reverseArray(arr));