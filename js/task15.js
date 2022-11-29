// В функцию подается название свойства. Если свойство присутствует в объекте вывести "Exist", если отсутсвует вывести сообщение "No exist".

function checkValue(obj, value) {
    return (value in obj) ? 'Exist' : 'No exist';
}

console.log(checkValue())
