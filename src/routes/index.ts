import Router from "express";
import TodoRouter from "./example/ExampleRouter";
import ExampleRouter from "./example/ExampleRouter";

const AppRouter = Router();

AppRouter.use("/example", ExampleRouter);

export default AppRouter;
