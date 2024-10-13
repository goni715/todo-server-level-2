import { model, Schema } from "mongoose";
import { TTodo } from "./TodoInterface";


const todoSchema = new Schema<TTodo>({
    title: {
        type: String,
        required:true,
        trim: true
    },
    description: {
        type: String,
        required:true,
        trim: true
    },
    status: {
        type: String,
        enum: ['finished' , "pending"],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['high' , "medium", 'low'],
    }
},{
    timestamps: true
})


const TodoModel = model<TTodo>('todos', todoSchema);
export default TodoModel;