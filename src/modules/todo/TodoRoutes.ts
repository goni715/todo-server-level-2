import express from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from './TodoController';

const router = express.Router();


router.post('/create-todo', createTodo);
router.get('/get-todos', getTodos);
router.delete('/delete-todo/:id', deleteTodo);
router.put('/update-todo/:id', updateTodo);



export default router;