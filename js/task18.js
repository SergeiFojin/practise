// Напишите функцию moveElement(arr,from,to), которая позволяет поменять местами элементы из позиции from в позицию to.

function moveElement(arr, from, to) {
    let elem1 = arr[from];
    let elem2 = arr[to];
    arr[to] = elem1;
    arr[from] = elem2;
    return arr
}

console.log(moveElement())