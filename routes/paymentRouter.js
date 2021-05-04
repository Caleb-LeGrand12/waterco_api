import express from "express";
import {
  capturePayment,
  viewPayment,
  viewAllPayments,
  viewPaymentsByPremise,
} from "../controllers/paymentController";

const paymentsRouter = express.Router();

//Capture a payment
paymentsRouter.post("/", capturePayment);

//View a payment payments/:id
paymentsRouter.get("/:id", viewPayment);

//View all members payments/
paymentsRouter.get("/", viewAllPayments);

//View payments by Premise payments/premise/:id
paymentsRouter.get("/premise/:id", viewPaymentsByPremise);

export default paymentsRouter;
