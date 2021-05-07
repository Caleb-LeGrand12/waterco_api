import express from "express";
import {
  captureBill,
  viewBill,
  viewAllBills,
} from "../controllers/billController.js";

const billsRouter = express.Router();

//Capture a bill /
billsRouter.post("/", captureBill);

//View a bills/:id
billsRouter.get("/:id", viewBill);

// view all bills

illsRouter.get("/", viewAllBills);
export default billsRouter;
