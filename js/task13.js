// Найти максимальный/минимальный элемент в массиве объектов
// В функцию передаем коллекцию. По результату выполнения вывести объект, определенное свойство которого, максимальное.

function findExtremumValues(collection) {
    let array = [];

    for(key of collection.keys()) {
        array = array.concat(Object.values(key));
    }

    array = array.sort((a, b) => a - b);

    return {'min':array[0], 'max':array[array.length-1],}
}

console.log(findExtremumValues())