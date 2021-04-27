import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    headLine: "string",
    subHead: "string",
    content: "string",
    category: {
      name: "string",
      img: "string",
    },
    author: {
      name: "string",
      img: "string",
    },
  },
  { timestamps: true }
);

export default model("User", UserSchema);
