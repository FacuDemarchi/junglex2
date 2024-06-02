const { Database } = require('sqlite3');

class Repartidor {
    constructor() {
        // this.id = 0; --> Completar el constructor
    }

    addClient(username, email) {
        const Database = require('../services/db_connect');
        const insertQuery = `INSERT INTO repartidor (username, email) VALUES (?, ?)`;

        Database.run(insertQuery, [username, email], function (err) {
            if (err) {
                console.error('Error adding repartidor', err.message);
            } else {
                console.log(`repartidor added with ID: ${this.lastID}`);
            }
        });
        Database.close();
    }

    getClients(callback) {
        const Database = require('../services/db_connect');
        const selectQuery = `SELECT * FROM repartidor`;

        Database.all(selectQuery, (err, rows) => {
            if (err) {
                console.error('Error fetching repartidores', err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
        Database.close();
    }
}

// Exportar la clase
module.exports = Repartidor;