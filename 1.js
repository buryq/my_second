function countBits(n) {

    let result = 0;

    //do sth here
    let b = (n).toString(2);

    // console.log('b is ...', b);

    // b.forEach(item => {
    //     if (item === '1') {
    //         result++;
    //     }
    // })

    // console.log('b is ', typeof (b));

    console.log(`binary of ${n} is ${b}`);

    for (let i = 0; i < b.length; i++) {
        if (b[i] === '1') {
            result++;
        }
    }


    return result;
}

let o = countBits(9651254);
console.log(`It has ${o} of 1`);