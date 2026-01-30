let students = [
    {Id : '006' , Name: "Inam" , Sport : 'Cricket'},
    {Id : '005' , Name: "Ikram" , Sport : 'Football'},
    {Id : '004' , Name: "Niamat" , Sport : 'Volleyball'},
    {Id : '003' , Name: "Sifwat" , Sport : 'Hockey'},
];
// students.filter((curValue , index , array) => {

// })


const names = students.map((curValue , index , array) => {
    return(curValue.names)
})
console.log(names);


// const newArray = [];

// for(let i = 0; i<students.length; i++){
//     if(students[i] .Id % 2==0){
//         newArray.push(students[i]);
//     }
// }


// const newArray = students.filter((curValue) => {
//     if (curValue.Id % 2 == 0) return true;
//     else return false;

// })
// console.log("New Array here ......");
// console.log(newArray);
