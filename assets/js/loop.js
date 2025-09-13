for(let i=1;i<=5;i++){
    console.log("num",i);
}
    let f=["A","B","C"];
console.log(f[0]);
f.push("D");
console.log("after push f= ",f);
  
f.pop();
console.log("after pop f =",f);
  
let a =[12,45,100,60];
let  max=a[0];
for (let i=1;i<a.length;i++){
    if (a[i]>max){
        max=a[i];
    }
}
console.log("max=",max);
let student={
    name:"ABC",
    age:45,
    markes:80

}
console.log(student.name,student.age,student.markes)