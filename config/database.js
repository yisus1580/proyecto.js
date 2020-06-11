const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'us-cdbr-east-05.cleardb.net',
	user: 'b0cbf9b5fedea7',
	password: 'fe714e8d',
	database: 'empleado'
});

pool.query = util.promisify(pool.query);
module.exports = pool;