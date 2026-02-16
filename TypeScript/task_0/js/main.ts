interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];
console.log(studentsList);

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");
const headRow: HTMLTableRowElement = document.createElement("tr");
const firstNameHeader: HTMLTableCellElement = document.createElement("th");
const locationHeader: HTMLTableCellElement = document.createElement("th");

firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

headRow.appendChild(firstNameHeader);
headRow.appendChild(locationHeader);

tableHead.appendChild(headRow);

table.appendChild(tableHead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);

body.appendChild(table);

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  table {
    width: 80%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;
document.head.appendChild(styleSheet);
