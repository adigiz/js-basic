let Person = {
    name: "John",
    age: 25,
    job: "Developer"
}

console.log(Person.name); 
console.log(Person.job); 

Person.hobby = "Reading";
console.log(Person.hobby); 

delete Person.job;
console.log(Person); 

let Student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
}
console.log(Student.address.city)

Person.greet = function (){
    return `Hi, my name is ${this.name}`
}
console.log(Person.greet()) 
