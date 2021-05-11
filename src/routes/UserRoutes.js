import { Router } from 'express';
import UserController from '../controllers/UserController.js';
const app = Router();

//ADMINISTRATOR ROUTES
app.get('/users', UserController.getAll);
app.get('/users/:idModule', UserController.getAllByModule);
app.post('/user', UserController.createUser);

export default app;