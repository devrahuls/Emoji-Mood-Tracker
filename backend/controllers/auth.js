import User from "../db/models/user.js";

// this file will contain the functions that will be called when the user hits the routes.

export const signup = async (req, res) => {
    res.send("signup route"); // This is just to test the route
    const data = req.body.sinUpData; // This is the data that the user sends
    try {
        const newData = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        const result = await User.create(newData); // This is the data that we are sending to the database.
        if(!result) {
            throw new Error("Error creating user"); // This is the error that we are throwing if the user is not created.
        }
    } catch (error) {
        console.log(error);
    }
    console.log(req.body);
}

// This is the login function that will be called when the user hits the login route.
export const login = async (req, res) => {
    res.send("login route");
    const data = req.body.loginData; //Email and pass that user sends when they login or hit the login route.
    try {
        const result = await
        User.findOne({email: data.email, password: data.password}); // This is the data that we are sending to the database and finding the user. 
        if(!result) {
            throw new Error("User not found");
        }else{
            console.log(result);
        }
    } catch (error) {
        console.log(error);
    }
    console.log(req.body);
}