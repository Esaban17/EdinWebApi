import { Router } from 'express';
import OperationController from '../controllers/OperationController.js';
const app = Router();

//ADMINISTRATOR ROUTES
app.get('/operations', OperationController.getAll);
app.get('/operations/:idModule', OperationController.getAllByModule)
app.get('/responses', OperationController.getResponses);
app.get('/operation/:idOperation', OperationController.getOperation);
app.get('/responses/:idOperation', OperationController.getResponsesById);
app.get('/operation', OperationController.getLastOperation);
app.post('/operation', OperationController.createOperation);
app.post('/response', OperationController.createResponse);

export default app;