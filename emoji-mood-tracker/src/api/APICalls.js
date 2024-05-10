import instance from "./Init";

// In this file, we will define all the API calls that we will be making to the server.

// This function will make a POST request to the server to sign up a new user.
export const signUp = async (sinUpData) => {
    let response = null;

    try {
        response = await instance.post('/signup', {sinUpData}) // signup route that we are hitting on the server by sending the signUpData that the user sends to the server.
    } catch (err) {
        response = err;
    }
    return response;
}

// This function will make a POST request to the server to login an existing user.
export const login = async (loginData) => {
    let response = null;

    try {
        response = await instance.post('/login', {loginData}) // login route that we are hitting on the server by sending the loginData that the user sends to the server.
    } catch (err) {
        response = err;
    }
    return response;
}

// This function will make a POST request to the server to save the mood data of the user. 
export const prevWeekMoods = async (prevWeekMoodData) => {
    let response = null;

    try {
        response = await instance.post('/prevWeekMoods', {prevWeekMoodData}) // prevWeekMoods route that we are hitting on the server by sending the prevWeekMoodData that the user sends to the server.
    } catch (err) {
        response = err;
    }
    return response;
}

export const updateDayMood = async (data) => {
    let response = null;
    console.log(data);
    try {
        response = await instance.post('/updateDailyMood', {data}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Emoji_Mood_Tracker_Token')}`
            }
        }); // prevWeekMoods route that we are hitting on the server by sending the prevWeekMoodData that the user sends to the server.
    } catch (err) {
        response = err;
    }
    return response;
}
export const updateWeeklyAverageMoods = async (data) => {
    let response = null;
    try {
        response = await instance.post('/updateWeeklyAvgMood', data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Emoji_Mood_Tracker_Token')}`
            }
        });
    } catch (err) {
        response = err;
    }
    return response;
}