const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter(line => line);
            const fields = {};

            lines.slice(1).forEach((line) => {
                const [firstname, lastname, age, field] = line.split(',');
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            resolve(fields);
        });
    });
}

module.exports = readDatabase;
