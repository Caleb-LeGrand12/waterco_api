import express from "express";
import membersRouter from "./memberRouter.js";
import billsRouter from "./billRouter.js";
import paymentsRouter from "./paymentRouter.js";
import premisesRouter from "./premiseRouter.js";
import routesRouter from "./routeRouter.js";
import usersRouter from "./userRouter.js";

const router = express.Router();

router.use("/members", membersRouter);
router.use("/bills", billsRouter);
router.use("/payments", paymentsRouter);
router.use("/premises", premisesRouter);
router.use("/routes", routesRouter);
router.use("/users", usersRouter);
// res.header("Access-Control-Allow-Origin: *");

export default router;
