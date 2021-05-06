import express from "express";
import { captureBill, viewBill } from "../controllers/billController.js";

const billsRouter = express.Router();

//Capture a bill /
billsRouter.post("/", captureBill);

//View a bills/:id
billsRouter.get("/:Bill_id", viewBill);

export default billsRouter;
