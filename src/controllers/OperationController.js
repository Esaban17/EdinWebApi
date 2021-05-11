import Operation from '../models/OperationModel.js';

var OperationController = {
    getAll: async (req, res) => {
        try{
            const results = await Operation.getAll();
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).json(results);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    getAllByModule: async (req, res) => {
        let idModule = req.params.idModule
        try{
            const results = await Operation.getAllByModule(idModule);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).json(results);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    getResponses: async (req, res) => {
        try{
            const results = await Operation.getResponses();
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).json(results);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    getOperation: async (req, res) => {
        let idOperation = req.params.idOperation
        try{
            const results = await Operation.getOperation(idOperation);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).json(results);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    getResponsesById: async (req, res) => {
        let idOperation = req.params.idOperation

        try{
            const results = await Operation.getResponsesById(idOperation);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).json(results);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    getLastOperation: async (req, res) => {
        try{
            const results = await Operation.getLastOperation();
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).json({message: 'Not Content'});
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    createOperation: async (req, res) => {
        let newOperation = {
            idModule: req.body.idModule,
            gloveCode: req.body.gloveCode,
            number1: req.body.number1,
            operation: req.body.operation,
            number2: req.body.number2,
            result: req.body.result,
            answer: req.body.answer,
            action: req.body.action,
            topic: req.body.topic
        }

        try{
            const results = await Operation.createOperation(newOperation);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json({message: 'Pregunta Realizada',operation: results[0][0], status: true});
            } else {
                res.status(200).json({message: 'Not Content'});
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    createResponse: async (req, res) => {
        let newResponse = {
            idOperation: req.body.idOperation,
            gloveCode: req.body.gloveCode,
            answer: req.body.answer
        }

        try{
            const results = await Operation.createResponse(newResponse);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json({message: 'Respuesta Insertada'});
            } else {
                res.status(200).json({message: 'Respuesta Insertada'});
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    } 
};

export default OperationController;