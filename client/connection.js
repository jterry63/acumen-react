// connection information for MySQL 

var mysql = require("mysql");


var connection = mysql.createConnection({
    use_env_variable: "JAWSDB_URL",
    user: 'xtzk6cvsnpsc4s9z',
    password: 'ku5yu5p1h0c2fi4c',
    port: 3306,
    dialect: 'mysql',
    host: 'y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'

});


// var connection = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = connection;