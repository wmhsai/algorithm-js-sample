//Primality Test
// 5 is prime => 1*5
// 9 is not prime => 1*9 || 3*3
//try dividing the number by all smaller numbers and return true if its only divisible by itself and 1.

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(5), "is prime 5");
console.log(isPrime(9), "is prime 9");
