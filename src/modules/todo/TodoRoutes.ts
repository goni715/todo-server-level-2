import express from 'express';
import { createTodo } from './TodoController';

const router = express.Router();


router.post('/create-todo', createTodo);




export default router;