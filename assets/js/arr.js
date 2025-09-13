let arr = []; 

// Function to add values dynamically
function addValue(value) {
    arr.push(value);   
        console.log("Value added:", value);
    console.log("Current array:", arr);
}

addValue(10);
addValue(20);
addValue(30);

function addFromUser() {
    let val = prompt("Enter a value:");
    arr.push(val);
    console.log("Value added from user:", val);
    console.log("Updated array:", arr);
}