export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.map(student => {
      const gradeInfo = newGrades.find(item => item.studentId === student.id);
      if (gradeInfo) {
        return { ...student, grade: gradeInfo.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    }).filter(student => student.location === city);
  }
  