const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line);
      const fields = {};

      lines.slice(1).forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      Object.entries(fields).forEach(([field, students]) => {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
