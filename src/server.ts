import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExampleRouter from "./routes/example/ExampleRouter";


const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use("/v1", ExampleRouter);

export default app;
