import pool from '../config/connection.js';

var UserModel = {
    getAll: async() => {
        const connection = await pool.getConnection();
        try{
            const data = await connection.query('SELECT * FROM Users');
            return data[0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release();
        }
    },
    getAllByModule: async(idModule) => {
        const connection = await pool.getConnection();
        try{
            const sql = "CALL SP_ShowUsersModule(?)"
            const data = await connection.query(sql,idModule);
            return data[0][0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release()
        }
    },
    createUser: async(newUser) => {
        const connection = await pool.getConnection();
        try{
            const sql = "CALL SP_CreateUser(?)"
            const data = await connection.query(sql,[newUser.gloveCode]);
            return data[0];
        }catch(ex){
            console.log(ex);
        }finally{
            connection.release();
        } 
    }
};

export default UserModel;