
const fib = (n) => {
    if (n === 1 || n === 1) {
        return 1
    }
    for (i = 2; i <= n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2])
    }
    return numbers[n]
}

console.log(fib(5), "fib 5"); //T=O(n) =>Linear Time Complxty
