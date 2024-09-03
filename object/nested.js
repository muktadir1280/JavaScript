const school = {
    name: 'Rajshi Govt Model School and college',
    class: [11, 12],
    unique: {
        section: 'Jashimuddhin'
    }
}
console.log(school.unique.section); //result check and dot notation
school.unique.section = 'section nai';
console.log(school['unique']['section']); //result check and third bracket notation