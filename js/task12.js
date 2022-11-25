// Найти максимальный/минимальный элемент в массиве

function findExtremumValues(arr) {
    arr = arr.sort((a, b) => a - b);
    return [arr[0], arr[arr.length-1]]
}

console.log(findExtremumValues())
