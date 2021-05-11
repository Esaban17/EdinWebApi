import pool from '../config/connection.js';

var StatisticsModel = {
    getModulePoints: async(idModule) => {
        const connection = await pool.getConnection();
        try{
            const data = await connection.query("CALL SP_ShowModulePoints(?)",idModule);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release();
        }
    },
    getUsersPoints: async(idModule) => {
        const connection = await pool.getConnection();
        try{
            const data = await connection.query("CALL SP_ShowUsersPoints(?)",idModule);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release();
        }
    },
    getAllModule: async(idModule) => {
        const connection = await pool.getConnection();
        try{
            const data = await connection.query("CALL SP_ShowModule(?)",idModule);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release();
        }
    },
    getDateModule: async(idModule) => {
        const connection = await pool.getConnection();
        try{
            const data = await connection.query("CALL SP_ShowDateModule(?)",idModule);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release();
        }
    }
};

export default StatisticsModel;