// Question 1 

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(mixedArray){

    return new Promise((res) => {
        
        const arr = mixedArray
        .filter(value => typeof value === 'string')
        .map(str => str.toLowerCase());

        res(arr);
        
    });
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error))