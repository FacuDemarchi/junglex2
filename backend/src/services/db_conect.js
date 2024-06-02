const sqlite3 = require('sqlite3').verbose();

class Database {
    constructor() {
        new sqlite3.Database('.db/database.db', (err) => {
            if (err) {
                console.error('Could not connect to database', err.message);
            } else {
                console.log('Connected to the database.');
            }
        });
    }

    close() {
        this.db.close((err) => {
            if (err) {
                console.error('Error closing the database', err.message);
            } else {
                console.log('Closed the database connection.');
            }
        });
    }
}

// Exportar la clase Database
module.exports = Database;
