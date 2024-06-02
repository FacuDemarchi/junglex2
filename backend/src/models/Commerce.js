class Commerce {
    constructor() {
        // this.id = 0; --> Completar el constructor
    }

    addCommerce(username, email) {
        const Database = require('../services/db_connect');
        const insertQuery = `INSERT INTO Commerce (username, email) VALUES (?, ?)`;

        Database.run(insertQuery, [username, email], function (err) {
            if (err) {
                console.error('Error adding commerce', err.message);
            } else {
                console.log(`commerce added with ID: ${this.lastID}`);
            }
        });
        Database.close();
    }

    getCommerces(callback) {
        const Database = require('../services/db_connect');
        const selectQuery = `SELECT * FROM commerce`;

        Database.all(selectQuery, (err, rows) => {
            if (err) {
                console.error('Error fetching commerce', err.message);
                callback(err);
            } else {
                callback(null, rows);
            }
        });
        Database.close();
    }
}

// Exportar la clase
module.exports = Commerce;