const updateStudentGradeByCity = (students, city, newGrades) => {
  const studentsByCity = students.filter((student) => student.location === city);
  return studentsByCity.map((student) => {
    const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (newGrade.length === 0) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: newGrade[0].grade };
  });
};
export default updateStudentGradeByCity;
