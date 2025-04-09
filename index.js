console.log("SOAL OBJECT-----")
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
console.log("SOAL ARRAY-----")

//Soal 1
let fruits = ["Apple", "Banana", "Orange"];

//Soal 2
console.log(fruits[0])
console.log(fruits[2])

//Soal 3
fruits.push("Mango");
console.log(fruits);

//Soal 4
fruits.unshift("Grape")
console.log(fruits);

//Soal 5
fruits.pop();
console.log(fruits);

//Soal 6
fruits.shift();
console.log(fruits);

//Soal 7
console.log(fruits.length);

//Soal 8
console.log(fruits.includes("Banana"));

//Soal 9
console.log(fruits.indexOf("Orange"));

//Soal 10
console.log(fruits.toString());