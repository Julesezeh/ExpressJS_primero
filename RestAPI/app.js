const express = require("express");

const app = express();

const { v4: uuidv4 } = require('uuid')

app.use(express.json());

let users = [
    {
        firstName: 'Kentavious',
        lastName: 'Cadwell',
        country: 'Pope',
        id: 'fa9079ef-4dd2-45a6-b884-e87eaddadd4d'
    },
    {
        firstName: 'Jordan',
        lastName: 'Terell',
        country: 'Carter',
        id: 'ea2b8d38-40bc-4f49-8aab-ed65bed42d49'
    },
    {
        firstName: 'Nyadavious',
        lastName: 'Wilburn',
        country: 'Atlanta, GA, USA',
        id: '66df4d6c-d530-4ce0-890a-66ff682554e8'
    }
]
//Get all Users
app.get("/users", (req, res) => {
    res.send(users)
    console.log(users)
})

//Get a single User
app.get("/users/:id", (req, res) => {
    const query_id = req.params.id
    console.log(query_id)
    const data = users.find((user) => user.id === query_id)
    console.log("data", data)
    res.send(data)
})

//Update a User
app.patch("/users/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, country } = req.body;
    const user_ = users.find((user) => user.id == id)

    if (firstName) {
        user_.firstName = firstName
    } else if (lastName) {
        user_.lastName = lastName
    } else if (country) {
        user_.country = country
    }

    console.log(`User with id ${user_.id} has been updated`)
    console.log("Happy Birthday Nicky!!")
    res.send(user_)

})


//Create new User 
app.post("/users", (req, res) => {
    const data = req.body;
    const u_id = uuidv4();
    const updated_data = { ...data, id: u_id }

    console.log("body", updated_data)

    users.push(updated_data)

    res.send(200, updated_data)
    console.log(users)

})


//Delete user
app.delete("/users/:id", (req, res) => {
    const { id } = req.params

    users = users.filter((user) => user.id !== id)


    res.send("User has been deleted")
})


app.listen(3000, (req, res) => {
    console.log("Listening on port 3000")
})