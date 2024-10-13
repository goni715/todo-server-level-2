import express, { Application, Request, Response,  } from "express";
import morgan from "morgan";
import cors from 'cors';

const app: Application = express();



app.use(morgan('dev'));
app.use(cors())





//testing route
app.get("/", (req: Request, res: Response) => {
  res.send("This is Todo Server with Typescript");
});



export default app;
