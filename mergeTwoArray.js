// Create a function that will merge two arrays and return the result as a new array

const mergeArray = (arr1, arr2) => {
    let newArr = [];

    for (const el of arr1) {
        newArr.push(el);
    }
    for (const el of arr2) {
        newArr.push(el);
    }

    return newArr;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(mergeArray(arr1, arr2));