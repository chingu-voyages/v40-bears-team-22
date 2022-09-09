import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { handleError } from "./controllers/errorController";
import HandleHeaders from "./middlewares/set-headers";
import authRoutes from "./routes/auth";
import Home from "./controllers/home";

dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGO_DB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.d96pl5j.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

const url = '/api/test/v1';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());


app.use(HandleHeaders);


app.use(url,authRoutes);
app.use(url,Home);




app.use(handleError);

mongoose.connect(MONGO_DB_URI, (result) => {
  console.log(`Connected to mongodb atlas ✨`);

  app.listen(PORT, () => {
    console.log(`🛡️  Server listening on port: ${PORT} 🛡️`);
  });


})