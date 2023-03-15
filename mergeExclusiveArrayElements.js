const mergeExclusive = (arr1, arr2) => {
    const newArr = [];

    for (const el of arr1) {
        if (!arr2.includes(el)) {
            newArr.push(el);
        }
    }

    for (const el of arr2) {
        if (!arr1.includes(el)) {
            newArr.push(el);
        }
    }

    return newArr;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 3, 2, 5];

console.log(mergeExclusive(arr1, arr2));