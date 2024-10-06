// [1,1,2,3,5,8,13,21,...] 

const fib = (n) => {
    if (n === 0 || n === 1) return 1

    return fib(n - 1) + fib(n - 2);
}
console.log(fib(5), "fib 5");
//T=O(2^n) =>Loop-base solution

const fibDynamicProgrammer = (n, mem) => {
    let res;
    if (mem[n]) return mem[n]

    if (n == 0 || n == 1) {
        res = 1
    }
    else {
        res = fib(n - 1, mem) + fib(n - 2, mem);
    }
    mem[n] = res;
    return res;
}
console.log(fib(5, {}), "fib 5");
//T=O(2*n)  => T=O(n) =>Linear Time Complxty
