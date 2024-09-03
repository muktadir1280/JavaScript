// continue --> skip rest of the code for this iteration 
// break  --> done with this loop. and loop end

// break example using for loop
for (i = 1; i <= 100; i++) {
    console.log(i);
    if (i >= 8) {
        break;
    }
}
console.log('Life is awesome');

//break example using while loop
let n = 54;
while (n >= 40) {
    console.log(n);
    if (n <= 50) {
        break;
    }
    n--;

}