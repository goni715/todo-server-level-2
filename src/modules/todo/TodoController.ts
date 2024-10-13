import { Request, Response } from "express";
import TodoModel from "./TodoModel";

const createTodo = async (req: Request, res: Response) => {
    try{
        const PostBody = req.body;
        const data = await TodoModel.create(PostBody)
        res.status(200).json({success: true, message: "Todo is created successfully", data: data});
    }
    catch (err:any) {
        res.status(500).json({success: false, message: "Failled to create a Todo", error: err});
    }
    
}

export {
    createTodo
}