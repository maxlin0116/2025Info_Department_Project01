import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/api.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

app.get("/", (_, res) => {
  return res.send({ message: "Server running" });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
