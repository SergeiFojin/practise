// В функцию подается несколько массивов. Вернуть один массив со всеми элементами.

function returnSumArray(...args) {
    let arr = [];
    for(let arg of args) {
        arr = arr.concat(arg);
    }
    return arr;
}

console.log(returnSumArray())
