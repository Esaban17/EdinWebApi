import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

//IMPORT RUTAS
import AdministatorRoutes from './src/routes/AdministratorRoutes.js';
import StatisticsRoutes from './src/routes/StatisticsRoutes.js';
import OperationRoutes from './src/routes/OperationRoutes.js';
import UserRoutes from './src/routes/UserRoutes.js';
import ModuleRoutes from './src/routes/ModuleRoutes.js';

//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.set('port', process.env.PORT || 3000);

//CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//USE RUTAS
app.use('/api/v1/', AdministatorRoutes);
app.use('/api/v1/', StatisticsRoutes);
app.use('/api/v1/', OperationRoutes);
app.use('/api/v1/', UserRoutes);
app.use('/api/v1/', ModuleRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server Running On Port ${app.get('port')}`);
});







