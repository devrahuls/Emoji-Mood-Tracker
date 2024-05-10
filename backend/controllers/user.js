import User from "../db/models/user.js";
import jwt from "jsonwebtoken";


export const dayEmojiUpdate = async (req, res) => {
    const user = req.user;
    console.log(req.body);
    for (let data of req.body.data) {
        if (user.dailyEmoji.length > 0) {
            const indexInDailyEmoji = user.dailyEmoji.findIndex(obj => obj.index === data.index)
            console.log(indexInDailyEmoji);
            if (indexInDailyEmoji !== -1) {
                user.dailyEmoji[indexInDailyEmoji] = { emojiName: data.emojiName, index: data.index }
            } else {
                user.dailyEmoji.push(data);
            }
        } else {
            user.dailyEmoji.push(data)
        }
    }
    

    try {
        const result = await user.save();
    } catch (error) {
        console.log(error);
    }

    user.dailyEmojiCount = [];
    for (let data of user.dailyEmoji) {
        if (user.dailyEmojiCount.length > 0) {
            const indexInDailyEmoji = user.dailyEmojiCount.findIndex(obj => obj.emojiName === data.emojiName)
            if (indexInDailyEmoji !== -1) {
                user.dailyEmojiCount[indexInDailyEmoji] = { emojiName: data.emojiName, count: user.dailyEmojiCount[indexInDailyEmoji].count+1 }
            } else {
                user.dailyEmojiCount.push({ emojiName: data.emojiName, count: 1 });
            }
        } else {
            user.dailyEmojiCount.push({ emojiName: data.emojiName, count:1 })
        }
    }

    try {
        const result = await user.save();
    } catch (error) {
        console.log(error);
    }
}

export const weeklyAvgEmojiUpdate = async (req, res) => {
    try {
        req.user.weeklyAverageMoods = req.body;
        await req.user.save();
        res.status(200).send("Weekly Average Moods Updated");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}