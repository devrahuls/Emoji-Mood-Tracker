import express from 'express';
import {dayEmojiUpdate, weeklyAvgEmojiUpdate} from "../controllers/user.js"
import userAuth from '../middlewares/auth.js';

const router = express.Router(); //creating the router instance to create the routes. (Routing - the path in which client requests talk to applications' endpoints. )
router.post("/updateDailyMood", userAuth, dayEmojiUpdate); //creating the route for signup
router.post("/updateWeeklyAvgMood", userAuth, weeklyAvgEmojiUpdate); //  creating the route for login

export default router;
