const getStudentIdsSum = (students) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.id;
  return students.reduce(reducer, 0);
};

export default getStudentIdsSum;
