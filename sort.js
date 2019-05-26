function minPos(arr, startPos) {
    let minI = startPos;
    for (let i = startPos + 1; i < arr.length; i++) {
        if (arr[i] < arr[minI]) {
            minI = i;
        }
    }
    return minI;
}

function swap(arr, pos1, pos2) {
    const min = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = min;
}

// сортировка массива по возрастанию
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const minI = minPos(arr, i);
        swap(arr, minI, i);
    }
    return arr;
}
console.log(sort([2, 9, 6, 8]));