// Вернуть массив значений соответствующих ключу из массива объектов
// В функцию передаем коллекцию и название ключа. По результату выполнения вывести массив значений по этому ключу всех объектов.

function returnCorrectValues(collection, value) {
    let res = [];
    for(key of collection.keys()){
        if(Object.keys(key).includes(value)) res.push(key[value])
    }
    return res;
}

console.log(returnCorrectValues())

