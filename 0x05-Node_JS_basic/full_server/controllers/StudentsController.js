const readDatabase = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        readDatabase(process.argv[2])
            .then((fields) => {
                res.write('This is the list of our students\n');
                for (const [field, students] of Object.entries(fields).sort()) {
                    res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
                }
                res.end();
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        readDatabase(process.argv[2])
            .then((fields) => {
                if (fields[major]) {
                    res.write(`List: ${fields[major].join(', ')}\n`);
                } else {
                    res.write('No students found for this major');
                }
                res.end();
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }
}

module.exports = StudentsController;
