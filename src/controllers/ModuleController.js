import Module from '../models/ModuleModel.js';

var ModuleController = {
    createModule: async (req, res) => {
        let newModule = {
            module: req.body.module,
        }

        try{
            const results = await Module.createModule(newModule);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json({message: 'Modulo Creado'});
            } else {
                res.status(200).json({message: 'Modulo Creado'});
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }   
};

export default ModuleController;