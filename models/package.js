import { Schema, model, models } from "mongoose";

const packageSchema = new Schema({
    username: {
        type: String,
        required: [true, "username can not be empty!!"],
    },
    title: {
        type: String,
        require: [true, "title can not be empty!!"],
    },
    receiveFrom: {
        type: String,
        required: [true, "location can not be empty!!"],
    },
    sendTo: {
        type: String,
        required: [true, "location can not be empty!!"],
    },
    packageInfo: {
        type: String,
        required: [true, "package info can not be empty!!"],
    },
});

const Package = models.Package || model("Package", packageSchema)
export default Package