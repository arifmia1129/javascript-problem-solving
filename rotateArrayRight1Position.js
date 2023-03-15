// Rotate an array to the right 1 position

const rotateArray = (arr) => {
    const last = arr.pop();

    arr.unshift(last);
}

const arr = [1, 2, 3];

rotateArray(arr);
console.log(arr);