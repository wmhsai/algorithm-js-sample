function fact(number) {
    let temp = 1;
    for (let i = 2; i <= number; i++) {
        temp= temp * i
    }
    return temp
}


console.log(fact(3)); //3*2*1
console.log(fact(4)); //4*3*2*1
console.log(fact(5)); //5*4*3*2*1
