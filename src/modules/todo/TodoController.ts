import { Request, Response } from "express";
import TodoModel from "./TodoModel";
import { Types } from "mongoose";

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



const getTodos = async (req: Request, res: Response) => {
    try{
        const priority = req?.query?.priority;
        let data: any[] = [];

        if(priority){
            data = await TodoModel.find({priority}).sort('isCompleted -createdAt'); 
        }else{
            data = await TodoModel.find().sort('isCompleted -createdAt'); 
        }

        res.status(200).json({success: true, message: "Todos are retrieved successfully", data: data});
    }
    catch (err:any) {
        res.status(500).json({success: false, message: "Failled to retrieve todos", error: err});
    } 
};


const deleteTodo = async (req: Request, res: Response) => {
    try{
        let id =req.params.id;
        const ObjectId = Types.ObjectId;
        const DeleteQuery = {_id: new ObjectId(id)};
        const result =  await TodoModel.deleteOne(DeleteQuery);
        res.status(200).json({success: true, message: "Todo is deleted successfully", data: result});
    }
    catch (err:any) {
        res.status(500).json({success: false, message: "Failled to delete todo", error: err});
    } 
};


const updateTodo = async (req: Request, res: Response) => {
    try{
        let id = req.params.id;
        const ObjectId = Types.ObjectId;
        const UpdateQuery = {_id: new ObjectId(id)};
        const result =  await TodoModel.updateOne(UpdateQuery, req.body);
        res.status(200).json({success: true, message: "Todo is updated successfully", data: result});
    }
    catch (err:any) {
        res.status(500).json({success: false, message: "Failled to update todo", error: err});
    } 
};



export {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo
}