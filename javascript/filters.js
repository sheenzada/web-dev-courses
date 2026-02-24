a.map((x)=>{
    console.log(x);
});

console.log(a);

let val=a.reduce((acc,curr)=>{
    console.log(acc,curr);
    return acc+curr;
},0);

console.log(`the sum of array is ${val}`);

a.forEach((x)=>{
    console.log(`the value is ${x}`);
}
);
let fil=a.filter((x)=>{
    return x%2==0;
});
console.log(fil);

let sum=a.some((x)=>{
    return x%2==0;
});
console.log(sum);

let er=a.every((x)=>{
    return x%2==0;
});
console.log(er);

ary=a.sort((a,b)=>{
    return a-b;
});
console.log(ary);

let car=["tsla","bmw","vits","honda","colra" ,"tx","tz"]
// console.log(car[0]);
let [tsal,bmw,vits,honda,colre,...remingcar]=car;

console.log(vits);
console.log(remingcar);
console.log("----------------- boject-----------------");

let person={
    name:"sydain",
    age:23,
    email:"sy@gmail.com"

}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.email);
console.log("+++++++++++++++++today class++++++++++++++++");

let {name,age,email}=person;
console.log(name);
console.log(age);

// let persons=[
//     {
//           name:"sydain",
//     age:23,
//     email:"sy@gmail.com",
//     adres:{
//         cit:["skardu","shigr","KMG","KHP"],
//         zip:[1610,23121,342124]
//     }
//     },
//     {
//     name:"muntazr",
//     age:23,
//     email:"sy@gmail.com"
//     },
//      {
//     name:"mutaba",
//     age:23,
//     email:"sy@gmail.com"
//     }

// ];

// console.log(persons);


let persons = [
    {
        name: "sydain",
        age: 23,
        email: "sy@gmail.com",
        adres: {
            cit: ["skardu", "shigr", "KMG", "KHP"],
            zip: [1610, 23121, 342124]
        },
        // Function inside the object
        getResult: function() {
            return `Name: ${this.name}, City: ${this.adres.cit[0]}, Zip: ${this.adres.zip[0]}`;
        }
    },
    {
        name: "muntazr",
        age: 23,
        email: "sy@gmail.com",
        getResult: function() {
            return `Name: ${this.name}, Email: ${this.email}`;
        }
    },
    {
        name: "mutaba",
        age: 23,
        email: "sy@gmail.com",
        getResult: function() {
            return `Name: ${this.name}, Age: ${this.age}`;
        }
    }
];

// To see the results:
persons.forEach(person => {
    if (person.getResult) {
        console.log(person.getResult());
    }
});

let students = [
    {
        name: "Sydain",
        marks: { 
            math: 85,
             english: 78, 
             science: 92 
            },
        generateMarksheet: function() {
            let total = this.marks.math + this.marks.english + this.marks.science;
            const totl=300;
            let percentage = (total / totl) * 100;
            return `Name: ${this.name} |total marks: ${totl}| Obt Marks: ${total} | Percentage: ${percentage.toFixed(2)}%`;
        }
    },
    {
        name: "Muntazr",
        marks: { math: 90, english: 85, science: 90 },
         generateMarksheet: function() {
            let total = this.marks.math + this.marks.english + this.marks.science;
            const totl=300;
            let percentage = (total / totl) * 100;
            return `Name: ${this.name} |total marks: ${totl}| Obt Marks: ${total} | Percentage: ${percentage.toFixed(2)}%`;
        }
    }
];

students.forEach(student => {
    console.log(student.generateMarksheet());
});