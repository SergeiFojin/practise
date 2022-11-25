// Вывод всех элементов, где совпадает хотя бы одно значение из массива
// В функцию передаем массив и 2 значения. По результату выполнения вывести все элементы массива, которые равны или второму, или третьему параметру.

function returnCorrectValues(arr, value1, value2) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value1 || arr[i] === value2) res.push(arr[i]);
    }
    return res;
}

console.log(returnCorrectValues())

