import { Router } from "express";
import userRoutes from "./user-routes.js";
// import mailRoutes from "./mail-routes.js";
const appRouter = Router();

appRouter.use("/user", userRoutes); //domain/api/v1/user
// appRouter.use("/emails", mailRoutes); //domain/api/v1/emails
export default appRouter;