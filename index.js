// question 1
const person = {
  name: "John",
  age: 25,
  job: "Developer",
};
console.log(person);

// question 2
console.log(person.name);
console.log(person.job);

// question 3
person["hobby"] = "Reading";
console.log(person);

// question 4
person["age"] = 30;
console.log(person);

// question 5
delete person.job;
console.log(person);

// question 6
const student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    },
}
console.log(student.address.city);
console.log(student);