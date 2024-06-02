class Client {
    constructor() {
        // this.id = 0; --> Completar el constructor
    }

    addClient(username, email) {
        const Database = require('../services/db_connect');
        const insertQuery = `INSERT INTO client (username, email) VALUES (?, ?)`;

        Database.db.run(insertQuery, [username, email], function (err) {
            if (err) {
                console.error('Error adding client', err.message);
            } else {
                console.log(`Client added with ID: ${this.lastID}`);
            }
        });
        Database.close();
    }

    getClients(callback) {
        const Database = require('../services/db_connect');
        const selectQuery = `SELECT * FROM client`;

        Database.db.all(selectQuery, (err, rows) => {
            if (err) {
                console.error('Error fetching clients', err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
        Database.close();
    }
}

// Exportar la clase
module.exports = Client;
