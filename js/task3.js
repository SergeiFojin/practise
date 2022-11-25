// Вывести количество элементов соответствующих условию
// В функцию передаем массив и значение. По результату выполнения вывести количество элементов массива, которые больше второго параметра.

function returnQuantityGreaterValue(arr, value) {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > value) res++;
    }
    return res;
}

console.log(returnQuantityGreaterValue())