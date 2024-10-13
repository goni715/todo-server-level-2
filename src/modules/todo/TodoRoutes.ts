import express from 'express';
import { createTodo, getTodos } from './TodoController';

const router = express.Router();


router.post('/create-todo', createTodo);
router.get('/get-todos', getTodos);



export default router;