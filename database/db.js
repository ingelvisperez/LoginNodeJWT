const mysql = require('mysql2');

// Configurar la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Cambiar a la dirección de tu servidor MySQL si es diferente
  user: 'root', // Reemplazar con tu nombre de usuario de MySQL
  password: '$1mpl1$0ft', // Reemplazar con tu contraseña de MySQL
  database: 'login_node_jwt' // Reemplazar con el nombre de tu base de datos en MySQL
});

// Conectar a MySQL
connection.connect(function(err) {
  if (err) throw err;
  console.log('Conectado a MySQL!');
});
module.exports= connection



// const mysql = require('mysql');

// const conexion={   
//         host:'localhost',
//         user : 'root',
//         password: '$1mpl1$0ft',
//         database: 'login_node_jwt'
// }
// const pool= mysql.createPool(conexion)

// pool.getConnection ((err, connection) =>{
//     if(err){
//         if (err.code === 'PROTOCOL_CONNECTION_LOST'){
//             console.error('conexion perdida')
//         }
//         if (err.code === 'ER_CON_COUNT_ERROR'){
//                 console.error('database tiene muchas conexiones')

//         }
//         if (err.code ==='ECONNREFUSED'){
//             console.error('database fue rechazada')
//         } 
         
//     } 
//     if (connection) connection.release();
//     console.log('db conectada')
//     return
// })
// // conertimos promesas que antes eran callbacks
// module.exports=pool;










// const mysql=require('mysql')

// const conexion = mysql.createConnection({
//     host : process.env.DB_HOST,
//     user : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DB_DATABASE,

// })

// conexion.connect( (error) => {
//     if(error){
//         console.log('El error de conexion es: ' + error)
//         return
//     }
//     console.log('¡Conectado a la base de datos MySQL')
// })

// module.exports = conexion