console.log("Display the json data on web page")
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users =>{
    let output= "<h3>User List </h3><ul>"
    users.forEach(user =>{
        output += `<li>${user.username} -${user.email}</li>`
    });
    output += '</ul>';
    document.body.innerHTML += output;
});
