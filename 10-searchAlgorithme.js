//Linear search
function findElement(arr, element) { //linear time complexity o(n)    
    let index = 0
    for (const item of arr) {
        if (
            typeof element === 'object' &&
            item.name === element.name &&
            element !== null) {
            return index
        }
        if (item === element) {
            return index
        }
        index++;
    }
}
const array = [5, 3, 10, -10, 33, 51];
const arrayObj = [{ id: 1, name: "mahsa" }, { id: 2, name: "maryam" }];
console.log(findElement(array, 10), "find element number");
console.log(findElement(arrayObj, { id: 2, name: "maryam" }), "find element object");

console.log(array.findIndex((el) => el === 10), "filterIndex"); //2
console.log(array.find((el) => el === 10), "filter"); //10

//Binary search => first sort => second find median element from list => and repeat binary search in half of list
const binarySearch = (sortedArray, element) => {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1
    while (startIndex <= endIndex) {

        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
        if (sortedArray[middleIndex] === element) {
            return middleIndex
        }

        if (sortedArray[middleIndex] < element) {
            startIndex = middleIndex + 1
        }
        else {
            endIndex = middleIndex - 1
        }

    }
}
arraySort = [1, 5, 9, 13, 99, 100]
console.log(binarySearch(arraySort, 100), "binary search index");
// in worst case time complexity is o(log n)


//Recursive Binary search 
const recursiveBinarySearch = (sortedArray, element, offset) => {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
    if (sortedArray[middleIndex] === element) {
        return middleIndex + offset
    }

    if (sortedArray[middleIndex] < element) {
        startIndex = middleIndex + 1
        offset = offset + middleIndex + 1
    }
    else {
        endIndex = middleIndex
    }
    return recursiveBinarySearch(sortedArray.slice(startIndex, endIndex + 1), element, offset)
}


arraySort = [1, 5, 9, 13, 99, 100]
console.log(recursiveBinarySearch(arraySort, 99 , 0), "Recursive search index");
// in worst case time complexity is o(log n)