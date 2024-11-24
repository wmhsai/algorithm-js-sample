function QuickSort(array) {
    const copiedArray = [...array]
    if (copiedArray.length <= 1) {
        return copiedArray;
    }
    const BiggerElementsArray = []
    const smallerElementsArray = []
    const pivotElement = copiedArray.shift()
    const centerElementsArray = [pivotElement]
    while (copiedArray.length) {

        const currentElement = copiedArray.shift()

        if (currentElement === pivotElement) {
            centerElementsArray.push(currentElement)
        }
        else if (currentElement < pivotElement) {
            smallerElementsArray.push(currentElement)
        }

        else {
            BiggerElementsArray.push(currentElement)
        }
    }
    const smallerElementsSortedArray = QuickSort(smallerElementsArray)
    const biggerElementsSortedArray = QuickSort(BiggerElementsArray)
    return smallerElementsSortedArray.concat(  //descending order
        centerElementsArray,
        biggerElementsSortedArray
    );
    // return biggerElementsSortedArray.concat(
    //     centerElementsArray,
    //     smallerElementsSortedArray
    // );


}
const sortedArray = QuickSort([5, 10, -3, -10, 1, 100, 99])
console.log(sortedArray, "QuickSortArray");
// Time Complexity
//  in best case is => O(n*log n)

//  in average case is items are sorted randomly (NOT in right or wrong order) =>O(n*log n)

//  in worst case is O(n^2)
//if you calling yourself inside of a function (recursive function) = linear time coplexity
//if you have loop in recursive => nested loop in a loop => quadratic time complexity O(n^2)

//space Complexity : O(n) 
//space Complexity : O(log n) is possible 
