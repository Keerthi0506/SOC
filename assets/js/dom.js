let greetBtn=document.getElementById("greetBTN")
greetBtn.addEventListener("click",()=>{
    let name=document.getElementById("nameInput").value;
    if(name){
        document.getElementById("title").innerText="Hello, "+name+"!"
    }else{
        alert("Please enter the name")
    }
})
let isBlue=false;
let togglrBtn=document.getElementById("toggleBtn")
togglrBtn.addEventListener("click",()=>{
    if(isBlue){
        document.body.style.backgroundColor="white";

    }else{
        document.body.style.backgroundColor="blue";
        isBlue=true;
    }
})