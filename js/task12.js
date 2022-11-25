// Найти максимальный/минимальный элемент в массиве

function findExtremumValues(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    return [sortedArr[0], sortedArr[sortedArr.length-1]];
}

console.log(findExtremumValues())
