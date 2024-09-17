function isPowerOfTwo(number) {
    if (number < 1) {
        return false
    }
    let dividerNumber = number; //1
    while (dividerNumber !== 1) {
        if (dividerNumber % 2 !== 0) {
            c
            return false
        }
        dividerNumber = dividerNumber / 2
    }
    return true
}

// log2(8)=3 >2^3 =  8 
Math.pow(2, 3) //=> 8
console.log(isPowerOfTwo(8)); //2*2*2
console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(20)); //false
console.log(isPowerOfTwo(16)); //2*2*2
console.log(isPowerOfTwo(13)); //false

//bitwise magic!
// decimal to binary converter
//number & (number-1) ===0
//1 =1
//2=10
//3=100
//4=1000
function isPowerOfTwoWithBinaryLogic(number) {
    if (number < 1) {
        return false
    }
    return (number & (number - 1)) === 0 //O(1)
}
///when we saw divider its mean log