import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || "5016";

app.get("/", (req, res) => {
  res.json({ message: "Welcome to The WaterCo API" });
});

app.listen(port, () => {
  console.log(`WaterCo API Running on Port ${port}`);
});

export default app;
