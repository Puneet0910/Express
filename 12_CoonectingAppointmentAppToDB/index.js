function handleFormSubmit(event){
    event.preventDefault();
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    }

    fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
    })
    .then(response => response.json())
    .then(data => {
        displayUserOnScreen(data);
    })
    .catch(err => {
        console.log(err);
    });

    // clearing the input field
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
}

function displayUserOnScreen(userDetails){
    const userItem = document.createElement("li");
    userItem.appendChild(document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    ));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    
    userItem.appendChild(deleteBtn);
    userItem.appendChild(editBtn);

    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    deleteBtn.addEventListener("click", function (event){
        userList.removeChild(event.target.parentElement);
        const id = userDetails.id;
        fetch(`http://localhost:3000/appointments/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            console.log("Deleted successfully");
        })
        .catch(err => {
            console.log(err);
        });
    });

    editBtn.addEventListener("click", function (event) {
        userList.removeChild(event.target.parentElement);
        document.getElementById("username").value = userDetails.username;
        document.getElementById("email").value = userDetails.email;
        document.getElementById("phone").value = userDetails.phone;
        const id = userDetails.id;
        fetch(`http://localhost:3000/appointments/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            console.log("Deleted for edit");
        })
        .catch(err => {
            console.log(err);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/appointments")
    .then(response => response.json())
    .then(data => {
        data.forEach(appointment => {
            displayUserOnScreen(appointment);
        });
    })
    .catch(err => {
        console.log(err);
    });
});
