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
usersRouter.get("/:id", authenticate, viewUser);

//View all Users users
usersRouter.get("/", viewAllUsers);

//Update user record users/id
usersRouter.put("/:id", authenticate, updateUser);

//Update user password users/pass/id
usersRouter.put("/pas/:id", authenticate, updateUserPass);

//Close user account
usersRouter.delete("/:id", authenticate, deleteUser);

usersRouter.get("/", viewAllMembers);

export default usersRouter;
