let array = [89,46,0,35,1,-2,35];

let sortArray = (array) => {
    let len = array.length; // do kakogo elementa dvigatj - pointer
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j]; // dvigajet vpravo esli bolse
                array[j] = array[j + 1];//peredvigajet mensee nazat
                array[j + 1] = tmp; // soxranaet peremennuju iz vremenoj
                //console.log(array)//vivod iteracii
            }
        }
    }
    return array;
};
console.log(`sorted array is: ${sortArray(array)}`);
console.log(array);