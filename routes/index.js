import express from "express";
import membersRouter from "./memberRouter.js";
import billsRouter from "./billRouter.js";
import paymentsRouter from "./paymentRouter.js";
import premisesRouter from "./premiseRouter.js";
import routesRouter from "./routeRouter.js";
import usersRouter from "./userRouter.js";

const router = express.Router();

// CORS configuratation
router.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

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

router.use("/members", membersRouter);
router.use("/bills", billsRouter);
router.use("/payments", paymentsRouter);
router.use("/premises", premisesRouter);
router.use("/routes", routesRouter);
router.use("/users", usersRouter);
// res.header("Access-Control-Allow-Origin: *");

export default router;
