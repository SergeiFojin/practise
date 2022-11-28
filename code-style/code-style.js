const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo sem lacus, rhoncus mattis lacus rhoncus in. 
             Morbi fringilla molestie purus ut laoreet. Aliquam semper magna nec vulputate vestibulum. 
             Suspendisse interdum fermentum enim vel bibendum. Praesent sit amet magna a felis hendrerit blandit at nec turpis. 
             Pellentesque eu lectus ut orci commodo maximus. Mauris imperdiet aliquam nisi nec sagittis. 
             In dictum nunc a eros fermentum, nec dignissim libero laoreet. Morbi sit amet tellus at tellus maximus volutpat. 
             Sed vel magna nec odio pulvinar auctor. Nullam venenatis quam quam, at vestibulum nibh varius vitae. 
             In viverra erat quis turpis efficitur, euismod rutrum dui imperdiet. Suspendisse lobortis euismod elit at tempus. 
             Aenean vehicula suscipit ligula nec rhoncus. Etiam vitae porttitor nunc, sed placerat nunc.
`;

const array1 = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];
const array2 = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];
const array3 = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];

let result1 = filterFunc1(array1);
let result2 = filterFunc2(array2,4);
let result3 = filterFunc3(array3,4);


function filterFunc1(array) {
    let newArr = [];

    array.forEach(elem => {
        if (elem > 0) {
            newArr.push(elem);
        }
    })

    return newArr;
}

function filterFunc2(array, value) {
    let newArr = [];

    array.forEach(elem => {
        if (elem > value){
            newArr.push(elem);
        }
    })

    return newArr;
}

function filterFunc3(array, value) {
    let newArr = [];

    array.forEach(elem => {
        if (elem > value) {
            newArr.push(elem);
        } else {
            newArr.push(null);
        }
    })

    return newArr;
}


function testFunction(string) {
    console.log(`string1 ${string} test function`);
    console.log(`text string output`);
}