// Rotate an array to the left 1 position

const rotateArray = (arr) => {
    const first = arr.shift();
    arr.push(first);
}

const arr = [1, 2, 3];
rotateArray(arr);
console.log(arr);