// give me the list numvers betwwen 1 to 30 divisible by 5

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }

// }

let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
        sum = sum + i;
        console.log('The sum is: ', sum);

    }
}
console.log('The sum is: ', sum);