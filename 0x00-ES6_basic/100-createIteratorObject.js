export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (
        currentDepartmentIndex >= departments.length
          || currentEmployeeIndex >= departments[currentDepartmentIndex].length
      ) {
        return {
          done: true,
        };
      }

      const employee = departments[currentDepartmentIndex][currentEmployeeIndex];
      currentEmployeeIndex += 1;

      if (currentEmployeeIndex >= departments[currentDepartmentIndex].length) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
      }

      return {
        value: employee,
        done: false,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
