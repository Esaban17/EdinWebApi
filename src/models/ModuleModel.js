import pool from '../config/connection.js';

var ModulesModel = {
    createModule: async(newModule) => {
        const connection = await pool.getConnection();
        try{
            const sql = "CALL SP_CreateModule(?)"
            const data = await connection.query(sql,[newModule.module]);
            return data[0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release();
        } 
    }
};

export default ModulesModel;