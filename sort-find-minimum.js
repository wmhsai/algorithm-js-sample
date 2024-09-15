const arraySort = [2, 4, 5, 1, 6, 9]
const arraySwap = [2, 4, 5, 1, 6, 9]
function findMinimumValueSort(a) {
    a.sort()
    return a[0]
}

function findMinimumValueSwap(numbers) {
    minNumber = numbers[0] //1
    for (const num of numbers) { //1
        if (num < minNumber) { //n
            minNumber = num // 0 (best case) , n-1 (worst case)
        }
    }
    return minNumber; //1
}

//when we change a array inside of a function outside array
// value is change becuse any array in memort have a special and uniq space
console.log(findMinimumValueSort(arraySort)); //O(1)
console.log(findMinimumValueSwap(arraySwap)); //O(n)
 