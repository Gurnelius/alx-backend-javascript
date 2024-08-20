const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
