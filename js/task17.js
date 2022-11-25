// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений
// В функцию передаем массив. Нужно вернуть массив, в котором отсутствуют ложные значения

function clearArray(arr) {
    return arr.filter(el => !!el != false);
}

console.log(clearArray())