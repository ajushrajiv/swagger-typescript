import Router from "express";
import TodoRouter from "./example/ExampleRouter";

const AppRouter = Router();

AppRouter.use("/todo", TodoRouter);

export default AppRouter;
