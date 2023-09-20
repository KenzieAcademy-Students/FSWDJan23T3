import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      min: 1,
      max: 3,
      default: 1,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
