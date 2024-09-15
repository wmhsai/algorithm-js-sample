function isPowerOfTwo(number) {
    if (number < 1) {
        return false
    }
    if (number  % 2 !== 0) { //1
        return false
    }
    let dividerNumber = number; //1
    while (dividerNumber !== 1) {
        if (dividerNumber % 2 !== 0) { //O(log n)
            return false
        }
        dividerNumber = dividerNumber / 2
    }
    return true
}


console.log(isPowerOfTwo(8)); //2*2*2
console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(20)); //false
console.log(isPowerOfTwo(16)); //2*2*2
