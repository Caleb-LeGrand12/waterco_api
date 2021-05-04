import express from "express";
import {
  addRoute,
  viewAllRoutes,
  viewRoute,
  updateRoute,
} from "../controllers/routesController";

const routesRouter = express.Router();

//Add a Route
routesRouter.post("/", addRoute);

//View a route routes/:id
routesRouter.get("/:id", viewRoute);

//View all routes routes/
routesRouter.get("/", viewAllRoutes);

//Update route record routes/
routesRouter.put("/:id", updateRoute);

export default routesRouter;
