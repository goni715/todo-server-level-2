import express, { Application, Express, Request, Response } from "express";

const app : Application = express();


app.get('/', (req, res)=> {
    res.send('This is Todo Server with Typescript')
})

export default app;