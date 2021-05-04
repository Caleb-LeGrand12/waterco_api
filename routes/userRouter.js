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
} from "../controllers/";
// import { authenticate } from "../middlewares/auth.js";

const usersRouter = express.Router();

//Add a User - Sign Up - Authenticate.
usersRouter.post("/", addUser);

//Add a User - Sign In - No need of Authentication
usersRouter.post("/signin", signIn);

//View a User users/:id - Authenticate.
usersRouter.get("/:id", viewUser);

//View all Users users/ - Authenticate.
usersRouter.get("/", viewAllUsers);

//Update user record users/id
usersRouter.put("/:id", updateUser);

//Update user password users/pass/id
usersRouter.put("/pass/:id", updateUserPass);

//Close user account
usersRouter.delete("/:id", deleteUser);

usersRouter.get("/", viewAllMembers);

export default usersRouter;
