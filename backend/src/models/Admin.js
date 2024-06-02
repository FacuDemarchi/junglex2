class Admin {
    constructor() {
        // this.id = 0; --> Completar el constructor
    }

    addAdmin(username, email) {
        const Database = require('../services/db_connect');
        const insertQuery = `INSERT INTO admin (username, email) VALUES (?, ?)`;

        Database.run(insertQuery, [username, email], function (err) {
            if (err) {
                console.error('Error adding admin', err.message);
            } else {
                console.log(`admin added with ID: ${this.lastID}`);
            }
        });
        Database.close();
    }

    getClients(callback) {
        const Database = require('../services/db_connect');
        const selectQuery = `SELECT * FROM admin`;

        Database.all(selectQuery, (err, rows) => {
            if (err) {
                console.error('Error fetching admins', err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
        Database.close();
    }
}

// Exportar la clase
module.exports = Admin;