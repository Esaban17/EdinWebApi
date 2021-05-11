import pool from '../config/connection.js';

var AdministratorModel = {
    getAll: async() => {
        const connection = await pool.getConnection();
        try{
            const data = await connection.query('SELECT * FROM Administrators');
            return data[0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release()
        }
    },
    getById: async(idAdministrator) => {
        const connection = await pool.getConnection();
        try{
            const data = await connection.query(`SELECT * FROM Administrators WHERE idAdministrator = ${idAdministrator}`);
            return data[0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release()
        }
    },
    register: async(newAdmin) => {
        const connection = await pool.getConnection();
        try{
            const sql = "CALL SP_CreateAdministrator(?,?,?,?,?)"
            const data = await connection.query(sql,[newAdmin.firstName,newAdmin.lastName,newAdmin.username,newAdmin.email,newAdmin.pass]);
            return data[0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release()
        }
    },
    authenticate: async(dataAdmin) => {
        const connection = await pool.getConnection();
        try{
            const sql = "CALL SP_AuthenticateAdmin(?)"
            const data = await connection.query(sql,[dataAdmin.email]);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release()
        }
    },
    addModule: async(dataModule) => {
        const connection = await pool.getConnection();
        try{
            const sql = "CALL SP_CreateAdministratorModule(?,?)"
            const data = await connection.query(sql,[dataModule.idAdministrator, dataModule.module]);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release()
        }     
    },
    getModules: async(idAdministrator) => {
        const connection = await pool.getConnection();
        try{
            const sql = "CALL SP_ShowAdministratorModules(?)"
            const data = await connection.query(sql,[idAdministrator]);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release()
        }
    }
};

export default AdministratorModel;