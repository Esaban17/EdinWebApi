import Statistics from '../models/StatisticsModel.js';

var StatisticsController = {
    getModulePoints: async (req, res) => {
        let idModule = req.params.idModule
        try{
            const results = await Statistics.getModulePoints(idModule);
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
    getUsersPoints: async (req, res) => {
        let idModule = req.params.idModule
        try{
            const results = await Statistics.getUsersPoints(idModule);
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
    getAllModule: async (req, res) => {
        let idModule = req.params.idModule
        try{
            const results = await Statistics.getAllModule(idModule);
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
    getDateModule: async (req, res) => {
        let idModule = req.params.idModule
        try{
            const results = await Statistics.getDateModule(idModule);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).json(results);
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }    
};

export default StatisticsController;