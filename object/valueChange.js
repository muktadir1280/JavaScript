const person = {
    name: 'Muktadir Rahman',
    age: 25,
    profession: 'developer',
    salary: 25000,
    isMarried: true,
}
person.salary = 3000; //value change by dot notation
console.log(person.salary);

person['age'] = 20; //direct
console.log(person.age);

person['name'] = 'Sabil'
console.log(person['name'])