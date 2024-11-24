function mergeSort(arr) {
  console.log('FUNCTION START');
  console.log(arr);
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    console.log('EXACTLY 2 ITEMS');
    console.log(arr[0] > arr[1] ? [arr[1], arr[0]] : arr);
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  console.log('AFTER RECURSIVE STEP');
  console.log(leftSortedArray);
  console.log(rightSortedArray);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length
  ) {
    if (
      leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }

  console.log('AFTER MERGE');
  console.log(mergedArr);

  return mergedArr;
}

// Recursive Step Time Complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Time Complexity outside of the Recursion: O(n)
// Algorithm Time Complexity: O(n^logb(a) * log n) => O(n * log n)
//space Complexity : O(n) 

// const sortedArray = sort([-10, 33, 5, 10, 9, 3, -19, -99, 100]);
const sortedArray = mergeSort([-10, 33, 100, 5]);
console.log(sortedArray);
