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
    reviews: [{ text: "string", user: "string" }],
  },
  { timestamps: true }
);

UserSchema.post("validate", function (error, doc, next) {
  if (error) {
    error.httpStatusCode = 400;
    next(error);
  } else {
    next();
  }
});

export default model("User", UserSchema);
