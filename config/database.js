const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'vqvya48nqcharapb',
	password: 'bwuhepojty38r120',
	database: 'empleado'
});

pool.query = util.promisify(pool.query);
module.exports = pool;