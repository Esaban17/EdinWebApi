import { Router } from 'express';
import ModuleController from '../controllers/ModuleController.js';
const app = Router();

//ADMINISTRATOR ROUTES
app.post('/module', ModuleController.createModule);

export default app;