const arr = [12, 32, 8, 19, 54, 23, 12];

const result = arr.reduce((pre, cur, idx) => {

    let sum = 0;

    sum = pre + cur;

    // console.log(pre, cur, sum);

    return sum;
});

let resultArr = arr.filter(item => {

    if (item > result / arr.length) return item;


    // return (item > (result / arr.length) ? item : 0);
})

console.log(`Sum of the arr is ${result}, arr has ${arr.length} elements.`);
console.log(`Average value is ${result/arr.length}`);
console.log(resultArr);