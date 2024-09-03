//don notation
const person = {
    name: 'Muktadir Rahman',
    age: 25,
    profession: 'developer',
    salary: 25000,
    isMarried: true,
}
console.log(person); //puro object tai dekhabe
console.log(person.profession); //specific vabe dekhabe

const beton = person.salary; //puraton properties er value notun properties er vitore rekhe
console.log(beton);

//third bracket notation
console.log(person['isMarried']); //direct 
third = person['age']; //indirect
console.log(third)