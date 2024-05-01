import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import Router from "./routes/auth.js";

const app = express();
app.use(helmet()); //it will secure the app by setting various HTTP headers
app.use(cors()); //it will allow the request to come from different origin
app.use(morgan("dev")); //it will log the request in the console
app.use(express.json()); //it will parse the request in json format
app.use(express.urlencoded({ extended: true })); //it will parse the request in urlencoded format


//Setting up the routers
app.use("/api", Router); //it will use the auth.js file from the routes folder



//Now we are connecting the database with the server
const dbconnection = () => {
    //connecting the database with the server
    mongoose.connect("mongodb://127.0.0.1/moodTrackerApp").then(() => {
        console.log("DB CONNECTED");

        app.listen(8000, () => {
            console.log("Your server is running");
        }) //it will run on the given port ie 8000, and the callback function will run when the server is running
    });
};

dbconnection(); //calling the function to connect the database with the server