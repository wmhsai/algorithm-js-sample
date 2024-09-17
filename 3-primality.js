//Primality Test
// 5 is prime => 1*5
// 9 is not prime => 1*9 || 3*3
//try dividing the number by all smaller   and return true if its only divisible by itself and 1.

function isPrime(number) {
    for (let i = 2; i < number; i++) { //n
        if (number % i === 0) {
            return false
        }
    }
    return true
}

// Best Case : number =1 OR number =2 =>O(1)
// Average Case: O(n)
//worst Case : number = 27,277 => O(n)
console.log(isPrime(5), "is prime 5");
console.log(isPrime(9), "is prime 9");


function isPrimeEfficient(number) {
    for (let i = 2; i < Math.sqrt(number); i++) { // جذر  O(n) (Improve :O(sqrt(n)) )
        if (number % i === 0) {
            return false
        }
    }
    return true
}
