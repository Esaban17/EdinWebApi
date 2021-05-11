import { Router } from 'express';
import AdministratorController from '../controllers/AdministratorController.js';
const app = Router();

//ADMINISTRATOR ROUTES
app.get('/administrator/:idAdministrator', AdministratorController.getById);
app.get('/administrator/module/:idAdministrator', AdministratorController.getModules);
app.get('/administrator', AdministratorController.getAll);
app.post('/administrator', AdministratorController.register);
app.post('/administrator/authenticate', AdministratorController.authenticate);
app.post('/administrator/module', AdministratorController.addModule);

export default app;