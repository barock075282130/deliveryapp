import { Schema, model, models } from "mongoose";

const packageSchema = new Schema({
  username: {
    type: String,
    required: [true, "username can not be empty!!"],
  },
  userPhone: {
    type: String,
    required: [true, "userPhone can not be empty!!"],
  },
  title: {
    type: String,
    require: [true, "title can not be empty!!"],
  },
  receiveFrom: {
    type: String,
    required: [true, "location can not be empty!!"],
  },
  receiverName: {
    type: String,
    required: [true, "receiverName can not be empty!!"],
  },
  receiverPhone: {
    type: String,
    required: [true, "receiverPhone can not be empty!!"],
  },
  sendTo: {
    type: String,
    required: [true, "location can not be empty!!"],
  },
  packageInfo: {
    type: String,
    required: [true, "package info can not be empty!!"],
  },
  packageUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  hidePackage: {
    type: String,
    default: 'รอ',
  },
  rider:{
    type: String,
    default: '',
  }
});

const Package = models.Package || model("Package", packageSchema)
export default Package