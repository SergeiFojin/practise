// Вернуть true, если хотя бы 1 элемент соответствует условию
// В функцию передаем коллекцию и 2 значения. По результату выполнения вывести true, если хотя бы у одного одно свойство равно второму параметру, а другое свойство равно третьему параметру.

function checkCorrectCollections(collection, value1, value2) {
    for(key of collection.keys()){
        if(Object.values(key).includes(value1) && Object.values(key).includes(value2)) return true;
    }
}

console.log(checkCorrectCollections())