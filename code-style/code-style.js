const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo sem lacus, rhoncus mattis lacus rhoncus in. 
             Morbi fringilla molestie purus ut laoreet. Aliquam semper magna nec vulputate vestibulum. 
             Suspendisse interdum fermentum enim vel bibendum. Praesent sit amet magna a felis hendrerit blandit at nec turpis. 
             Pellentesque eu lectus ut orci commodo maximus. Mauris imperdiet aliquam nisi nec sagittis. 
             In dictum nunc a eros fermentum, nec dignissim libero laoreet. Morbi sit amet tellus at tellus maximus volutpat. 
             Sed vel magna nec odio pulvinar auctor. Nullam venenatis quam quam, at vestibulum nibh varius vitae. 
             In viverra erat quis turpis efficitur, euismod rutrum dui imperdiet. Suspendisse lobortis euismod elit at tempus. 
             Aenean vehicula suscipit ligula nec rhoncus. Etiam vitae porttitor nunc, sed placerat nunc.
`;

const array = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];


const filterPositiveValue = (array) => {
    let newArr = [];

    array.forEach(elem => {
        if (elem > 0) {
            newArr.push(elem);
        }
    })

    return newArr;
}

const filterLargerValue = (array, value) => {
    let newArr = [];

    array.forEach(elem => {
        if (elem > value){
            newArr.push(elem);
        }
    })

    return newArr;
}

const checkLargerValue = (array, value) => {
    let newArr = [];

    array.forEach(elem => {
        if (elem > value) {
            return newArr.push(elem);
        }

        newArr.push(null);
    })

    return newArr;
}


const testFunction = (string) => {
    console.log(`string1 ${string} test function`);
    console.log(`text string output`);
}


const result1 = filterPositiveValue(array);
const result2 = filterLargerValue(array,4);
const result3 = checkLargerValue(array,4);


