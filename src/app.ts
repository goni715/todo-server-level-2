import express, { Application, Express, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("This is Todo Server with Typescript");
});

console.log("Goni Halesv Gopalganj");

export default app;
