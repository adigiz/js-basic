//Soal 1
let Person = {
    name: "John",
    age: 25,
    job: "Developer"
}

//Soal 2
console.log(Person.name); 
console.log(Person.job); 

//Soal 3
Person.hobby = "Reading";
console.log(Person.hobby); 

//Soal 4
Person.age = 30
console.log(Person.age);

//Soal 5
delete Person.job;
console.log(Person); 

//Soal 6
let Student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
}
console.log(Student.address.city)



//Soal 7
Person.greet = function (){
    return `Hi, my name is ${this.name}`
}
console.log(Person.greet()) 

// Ceritanya SOAL ARRAY 

//Soal 1
let fruits = ["apple", "banana", "orange"];