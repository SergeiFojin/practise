// Вывести индекс элемента в массиве
// В функцию передаем массив и значение. По результату выполнения вывести все индексы элементов массива, которые меньше второго параметра.

function returnIndexSmallerValues(arr, value) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < value) res.push(i);
    }
    return res;
}

console.log(returnIndexSmallerValues())