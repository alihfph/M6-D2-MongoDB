import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";

import usersRouter from "./services/users/index.js";

import {
  notFoundErrorHandler,
  badRequestErrorHandler,
  catchAllErrorHandler,
} from "./errorHandlers.js";

const server = express();

const port = 3000;

server.use(express.json());

server.use(cors());

server.use("/articles", usersRouter);

// ERROR HANDLERS MIDDLEWARES

server.use(badRequestErrorHandler);
server.use(notFoundErrorHandler);
server.use(catchAllErrorHandler);

console.log(listEndpoints(server));

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    server.listen(port, () => {
      console.log("Running on port", port);
    })
  )
  .catch((err) => console.log(err));
