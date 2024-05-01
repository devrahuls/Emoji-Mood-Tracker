import express from 'express';
import { signup } from '../controllers/auth.js';
import { login } from '../controllers/auth.js';

const Router = express.Router(); //creating the router instance to create the routes. (Routing - the path in which client requests talk to applications' endpoints. )
Router.route("/signup").post(signup); //creating the route for signup
Router.route("/login").post(login); //  creating the route for login

export default Router;
