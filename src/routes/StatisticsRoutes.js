import { Router } from 'express';
import StatisticsController from '../controllers/StatisticsController.js';
const app = Router();

//STATISTICS ROUTES
app.get('/statistics/:idModule', StatisticsController.getModulePoints);
app.get('/points/:idModule', StatisticsController.getUsersPoints);
app.get('/module/:idModule', StatisticsController.getAllModule);
app.get('/date/:idModule', StatisticsController.getDateModule);

export default app;