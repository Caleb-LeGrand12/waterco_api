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

const port = process.env.PORT || "5015";

app.get("/", (req, res) => {
  res.json({ message: "Welcome to The WaterCo API" });
});

app.listen(port, () => {
  console.log(`WaterCo API Running on Port ${port}`);
});

// CORS configuratation
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://waterco-uii.herokuapp.com/"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
    "origin",
    "Authorization"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

export default app;
