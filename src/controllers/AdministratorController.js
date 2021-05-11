import Administrator from '../models/AdministratorModel.js';
import Crypto from 'crypto';
import jwt from 'jsonwebtoken';

var AdministratorController = {
    getAll: async (req, res) => {
        try{
            const results = await Administrator.getAll();
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
    getById: async (req, res) => {
        let idAdministrator = req.params.idAdministrator

        try{
            const results = await Administrator.getById(idAdministrator);
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
    register: async (req, res) => {
        let newAdministrator = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            pass: Crypto.createHash('md5').update(req.body.pass).digest('hex')
        }

        try{
            const results = await Administrator.register(newAdministrator);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json({message: 'Sign Up Successful',status: true});
            } else {
                res.status(200).json({message: 'Sign Up failed',status: false});
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    authenticate: async (req, res) => {
        let adminData = {
            email: req.body.email
        }

        try{
            const results = await Administrator.authenticate(adminData);
            if (typeof results !== 'undefined' && results.length > 0) {
                let passEncrypt = Crypto.createHash('md5').update(req.body.pass).digest('hex');

                console.log(results[0].pass);
                console.log("Pass Encrypt " + passEncrypt);

                if(passEncrypt == results[0].pass){
                    var tempData = {
                        idAdministrator: results[0].idAdministrator,
                        firstName: results[0].firstName,
                        lastName: results[0].lastName,
                        username: results[0].username,
                        email: results[0].email,
                        pass: results[0].pass
                    };
        
                    var token = jwt.sign(tempData, 'edin', { expiresIn: "2h" });
                    var result = {
                        idAdministrator: results[0].idAdministrator,
                        firstName: results[0].firstName,
                        lastName: results[0].lastName,
                        username: results[0].username,
                        email: results[0].email,
                        pass: results[0].pass,
                        token: token
                    }
                    res.json({result,email: true,password: true});
                }else{
                    res.json({mensaje: "Invalid Password",email: true, password: false})
                }
            } else {
                res.status(200).json({
                    email: false,
                    password: false,
                    mensaje: "Invalid Email"
                });
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    },
    addModule: async (req, res) => {
        let dataModule = {
            idAdministrator: req.body.idAdministrator,
            module: req.body.module
        }

        try{
            const results = await Administrator.addModule(dataModule);
            if (typeof results !== 'undefined' && results.length > 0) {
                res.status(200).json({status:true});
            } else {
                res.status(200).json({status:false});
            }
        }catch(error){
            console.log(error);
            res.status(500).json({status:false});
        }
    },
    getModules: async (req, res) => {
        let idAdministrator = req.params.idAdministrator

        try{
            const results = await Administrator.getModules(idAdministrator);
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

export default AdministratorController;