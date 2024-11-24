//sample factorial
function fact(number) {
    if (number === 1) {
        return 1
    }
    return number * fact(number - 1)
}
//called a function inside another function is recursion
//nested function O(1) but its a new function
//in every functioncall => o(1)
//But we trigger multiple function calls => n function calls
//T = n*n(1) => O(n) =>its not faster but is less code
//same time complexity with diffrent way

console.log(fact(4));
//space Complexity : O(n)
