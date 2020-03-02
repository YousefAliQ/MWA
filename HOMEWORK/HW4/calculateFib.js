module.exports.calculateFib = calculateFib = (num) => {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

 process.on('message', (n) => {
    console.log(n)
     const sum = calculateFib(n);
     console.log(sum)
     process.send({sum});
 })

