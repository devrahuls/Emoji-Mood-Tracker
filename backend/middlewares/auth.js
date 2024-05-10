import jwt from "jsonwebtoken";
import User from '../db/models/user.js';

const userAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "secret");
        console.log(decoded);
        const user  = await User.findOne({_id: decoded.id});
        if(!user) {
            throw new Error("User not found");
        }
        req.token = token;
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).send({error: "Please authenticate"});
    }
}

export default userAuth;