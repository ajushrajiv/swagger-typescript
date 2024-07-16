import { Router } from "express";
import ExampleController from "./ExampleController";

const exampleController = new ExampleController();

const ExampleRouter = Router();

ExampleRouter.get("/todos", 
    (req, res, next) => exampleController.getAllExamples()
    .then(data => res.json(data))
    .catch(next));


export default ExampleRouter;
