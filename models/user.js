import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String
    },
    username: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        default: 'customer',
    }
})

const User = models.User || model("User", userSchema)

export default User;