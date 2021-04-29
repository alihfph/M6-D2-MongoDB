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
    reviews: [
      {
        type: new Schema(
          {
            text: {
              type: String,
              required: [true, "text field is required"],
              trim: true,
            },
            user: {
              type: String,
              required: [true, "user field is required"],
              trim: true,
            },
          }
          // { timestamps: true }
        ),
      },
    ],
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
