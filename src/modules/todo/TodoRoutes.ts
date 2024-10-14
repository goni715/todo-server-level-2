import express from 'express';
import { createTodo, deleteTodo, getTodos } from './TodoController';

const router = express.Router();


router.post('/create-todo', createTodo);
router.get('/get-todos', getTodos);
router.delete('/delete-todo/:id', deleteTodo);



export default router;