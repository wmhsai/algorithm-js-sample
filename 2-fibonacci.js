// Fibonacci Numbers
// [1,1,2,3,5,8,13,21,34,55,...]
// fib(4) =5
const fib = (n) => {
    const numbers = [1, 1]
    for (i = 2; i <= n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2])
    }
    return numbers[n]
}

console.log(fib(5), "fib 5"); //T=O(n) =>Linear Time Complxty
//space Complexity : O(1)
