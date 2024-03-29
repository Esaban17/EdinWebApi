import User from '../models/UserModel.js';

var AdministratorController = {
    getAll: async (req, res) => {
        try{
            const results = await User.getAll();
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
            const results = await User.getAllByModule(idModule);
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
    createUser: async (req, res) => {
        let newUser = {
            gloveCode: req.body.gloveCode,
        }

        try{
            const results = await User.createUser(newUser);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json({message: 'Usuario Creado'});
            } else {
                res.status(200).json({message: 'Usuario Creado'});
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }   
};

export default AdministratorController;