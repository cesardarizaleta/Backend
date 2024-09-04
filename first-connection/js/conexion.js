let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sys'
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion correcta');
    }
})

let registro = {name: 'Cesar', apellido: 'Dominguez'};
let sqlINSERT = 'INSERT INTO registro SET ?';
connection.query(sqlINSERT, registro, function(error, result){
    if(error){
        throw error;
    }
});

let sql = 'SELECT * FROM registro';
connection.query(sql, function(error, result){
    if(error){
        throw error;
    }else{
        console.log(result);
    }
});

connection.end();