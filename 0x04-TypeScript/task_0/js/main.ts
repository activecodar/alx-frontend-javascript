interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    location: "unknown"
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 55,
    location: "unknown"
}

const studentsList: Student[] = [student1, student2]


// Create the table element
const table = document.createElement("table");

// Create the table header
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Iterate over the studentsList array
studentsList.forEach(student => {
  // Create a new row
  const row = document.createElement("tr");

  // Create cells for first name and location
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  // Set the text content of the cells
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);