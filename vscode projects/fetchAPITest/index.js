//fetch has two fields, a url and options
//fetch is promise based so we can use async await, .then, and .catch
console.log(fetch("https://google.com", {
    //options go here

}));

fetch("https://google.com").then(res => console.log(res));

//the second .then returns our actual data
fetch("https://reqres.in/api/users").then(res => res.json()).then(data => console.log(data));

fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(data => console.log(data)
    //fetch won't return an error, b/c it always succeeds unless there is a network error or failure with fetch
//    .catch(error => console.log("ERROR"))
);

fetch("https://reqres.in/api/users/23")
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS");
        }
        else {
            console.log("UNSUCCESSFUL");
        }
    })
    .then(data => console.log(data));

fetch("https://reqres.in/api/users/23", {
    //to send JSON data to server, header type must be set correctly, amd body needs to be stringified
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user1'
    })
}).then(res => {
        return res.json()
    })
    .then(data => console.log(data));