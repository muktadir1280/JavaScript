//without trim
const country = 'Rajshahi'
const city = ' Rajshahi '
if (country === city) {
    console.log('Bhul tai thik dekhacche')
} else {
    console.log('Great! Bhul to bhul e');
}

//with trim
const country1 = 'Rajshahi'
const city1 = ' Rajshahi '
if (country.trim() === city.trim()) {
    console.log('Trim use korle okay!')
} else {
    console.log('Great! Bhul to bhul e');
}