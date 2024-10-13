import express, { Application, Request, Response,  } from "express";
import morgan from "morgan";
import cors from 'cors';
import bodyParser from "body-parser";
import todoRouter from './modules/todo/TodoRoutes';


const app: Application = express();



app.use(morgan('dev'));
app.use(cors())





//RequestBodySizeIncrease//Body Parser Implementation
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));



//application routes
app.use('/api/v1/todo', todoRouter)





//testing route
app.get("/", (req: Request, res: Response) => {
  res.send("This is Todo Server with Typescript");
});



export default app;
