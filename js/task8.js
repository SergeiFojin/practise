// Вернуть true, если все элементы соответствуют условию
// В функцию передаем коллекцию и 2 значения. По результату выполнения вывести true, если у всех объектов одно свойство равно второму параметру, а другое свойство равно третьему параметру.

function checkCorrectCollections(collection, value1, value2) {
    for(key of collection.keys()){
        if(!(Object.values(key).includes(value1) && Object.values(key).includes(value2))) return;
    }
    return true;
}

console.log(checkCorrectCollections())