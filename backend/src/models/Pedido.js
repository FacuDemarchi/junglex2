class Pedido {
    constructor() {
        // this.id = 0; --> Completar el constructor
    }

    addPedido(username, email) {
        const Database = require('../services/db_connect');
        const insertQuery = `INSERT INTO pedido (username, email) VALUES (?, ?)`;

        Database.run(insertQuery, [username, email], function (err) {
            if (err) {
                console.error('Error adding pedido', err.message);
            } else {
                console.log(`pedido added with ID: ${this.lastID}`);
            }
        });
        Database.close();
    }

    getPedidos(callback) {
        const Database = require('../services/db_connect');
        const selectQuery = `SELECT * FROM pedido`;

        Database.all(selectQuery, (err, rows) => {
            if (err) {
                console.error('Error fetching pedidos', err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
        Database.close();
    }
}

// Exportar la clase
module.exports = Pedido;