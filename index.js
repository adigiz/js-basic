let Person = {
    name: "John",
    age: 25,
    job: "Developer"
}

console.log(Person.name); // John
console.log(Person.job); // 25

Person.hobby = "Reading";
console.log(Person.hobby); // Reading

//remove job property
delete Person.job;
console.log(Person); // undefined

let Student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
}
console.log(Student.address.city)
