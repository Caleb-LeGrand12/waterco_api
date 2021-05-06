import express from "express";
import {
  addUser,
  viewAllUsers,
  viewUser,
  signIn,
  updateUser,
  updateUserPass,
  deleteUser,
  viewAllMembers,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/auth.js";

const usersRouter = express.Router();

//Add a User - Sign Up
usersRouter.post("/", addUser);

//Add a User - Sign In
usersRouter.post("/signin", signIn);

//View a User users/:id
usersRouter.get("/:id", viewUser);

//View all Users users
usersRouter.get("/", viewAllUsers);

//Update user record users/id
usersRouter.put("/:id", updateUser);

//Update user password users/pass/id
usersRouter.put("/pas/:id", updateUserPass);

//Close user account
usersRouter.delete("/:id", deleteUser);

usersRouter.get("/:id/members", viewAllMembers);

export default usersRouter;
