const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
}
for (const keys in mobile) {
    console.log(keys); //simple method
    console.log(mobile[keys]); // another method
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) { //bangla method
    console.log(key);
    console.log(key, ':', mobile[key]);
}