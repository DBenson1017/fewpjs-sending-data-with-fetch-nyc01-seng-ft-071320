// Add your code here

// helper function to add the info to the DOM 

function updateDOM(object){
    let body = document.getElementsByTagName(body)
    let id = document.createElement(li)
    id.innerText = object.name
    body.append(id)
}

// the "seed data" that we will put in the body of our config object, which is passed into fetch
// in the body of configObject, we stringify it as well  

function submitData(name, email) {

let data = {
    name: name,
    email: email
    };

let configObject = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json", // telling the .db what is comgin 
        "Accept" : "application/json" // telling the .db what we ant to recieve in return 
    },
    body: JSON.stringify(data)
    // putting our data into a string that any .db can read and translate to any language 
};

return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
        console.log(object.name);
        console.log(object.id);
        let body = document.getElementsByTagName('body')
        console.log("breakes before let dom ")
        let dom= body[0]
        let returnedID = document.createElement('h1')
        returnedID.innerText = object.id
        console.log("breakes before append ")

        dom.append(returnedID)

        console.log(success)
        
        // updateDOM(object)
    })
    .catch(function(error) {
        alert("triggered the catch");
        console.log(error.message)
    });
} // closes the submitData function
    