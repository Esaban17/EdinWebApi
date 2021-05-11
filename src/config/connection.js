import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    //host: '162.214.147.146',
    host: 'localhost',
    // user: "root",
    user: "devloops_user",
    // password: "",
    password: "devl00p@Saban",
    // database: "edin_web",
    database: "devloops_edin",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.query('SELECT 1 + 1 AS solution').then(results => {
    console.log('The solution is: ', results[0][0].solution);
}).catch(err => {
   console.log(err);
});

export default pool;



