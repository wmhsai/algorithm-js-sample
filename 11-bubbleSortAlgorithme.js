//Bubble sort 
function BubbleSort(array) {
    const resultArray = [...array]
    for (let outer = 0; outer < resultArray.length; outer++) {
        let outerEl = resultArray[outer];
        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            let innerEl = resultArray[inner]
            if (outerEl > innerEl) {
                // if (outerEl < innerEl) { //descending order
                resultArray[outer] = innerEl;
                resultArray[inner] = outerEl; //after swap elements
                outerEl = resultArray[outer] //update our refrences
                innerEl = resultArray[inner]

            }
        }
    }
    return resultArray
}
const sortedArray = BubbleSort([5, 10, -3, -10, 1, 100, 99])
console.log(sortedArray, "BubbleSortArray");
// Time Complexity
//  in best case is O(n)
//  in average case is Tends to be O(n^2)
//  in worst case is O(n^2)

//space Complexity : O(1)
