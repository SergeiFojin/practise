// Вывод всех элементов соответствующих значению/условию в массиве
// В функцию передаем массив и значение. По результату выполнения вывести все элементы массива, которые равны второму параметру.

function returnCorrectValues(arr, value) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) res.push(arr[i]);
    }
    return res;
}

console.log(returnCorrectValues())