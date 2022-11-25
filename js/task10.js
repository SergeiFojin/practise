// Вернуть true, если в массиве или массиве объектов есть значение
// В функцию передаем массив и значение. По результату выполнения вывести true, если в массиве есть значение равное второму параметру.

function checkCorrectValue(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) return true;
        if(typeof arr[i] === 'object' && Object.values(arr[i]).includes(value)) return true;
    }
}

console.log(checkCorrectValue())