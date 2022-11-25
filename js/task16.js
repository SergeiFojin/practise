// Копирование массива/объекта
// В функцию передаем массив. Нужно скопировать значения с одного массива в другой. В скопированном массиве изменить любой элемент и вывести 2 массива.

function copyArray(arr) {
    let newArray = arr.concat();
    newArray.push(1);
    return arr, newArray;
}

console.log(copyArray())
