// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // Usuario de MySQL
    password: '',        // Si no tienes contraseña, déjalo vacío
    database: 'contactos' // Nombre de tu base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error conectando a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a MySQL');
});

module.exports = connection;
