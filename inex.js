//f(3) =>3+2+1=6
const sum1 = (number) => {
    let result = 0
    for (let i = 0; i <= number; i++) {
        result += i
    }
    return result
}
const sum2 = (number) => {
    return (number / 2) * (number + 1)
}
console.log(sum1(100), "sum 1..."); //time complexity is O(n)
console.log(sum2(100), "sum 2..."); //time complexity is O(1)



const array = [8, 7, 3, 12, 9] //=> 8+7+3+12+9
const sumNubmers1 = (numbers) => {
    const length = numbers.length
    let result = 0
    for (let i = 0; i < length; i++) {
        result += numbers[i]
    }
    return result
}
const sumNubmers2 = (numbers) => {
    let result = 0
    for (const number of numbers) {
        //extra line is not matter
        result += number
    }
    return result
}
const sumNubmers3 = (numbers) => {
    return numbers.reduce((sum, curNum) => sum + curNum, 0)
}


console.log(sumNubmers1(array), "sumNubmers1");  //time complexity is O(n) T=n Linear Time Complexity
console.log(sumNubmers2(array), "sumNubmers2");  //time complexity is O(n) T=n Linear Time Complexity
console.log(sumNubmers3(array), "sumNubmers3");  //time complexity is O(n) T=n Linear Time Complexity
