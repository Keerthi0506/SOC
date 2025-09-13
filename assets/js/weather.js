let student = {
    name: "John",
    USN: "1MS17CS001",
    age: 21,
    marks: [83,64,22]
};
console.log(student);
console.log(student.name);
console.log(student.marks[1]);

console.log("student object",student);
//convert the object into string
let jsonString = JSON.stringify(student)
console.log("joson formate",jsonString);
// convert the string into object
let obj = JSON.parse(jsonString);
console.log("Object formate",obj);

let book = [
    { title : "Java", author : "KEERTHI", year : 2015},
    { title : "Python", author : "Kavay", year : 2018},
    { title : "C++", author : "Navulu", year : 2021} 
]
    console.log("book object",book);