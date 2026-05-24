interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 20,
    location: 'Los Angeles'
};

const studentsList = [student1, student2];

const table = document.createElement("table");
table.innerHTML = `
  <thead>
    <tr>
      <th>First Name</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody></tbody>
`;

const tbody = table.querySelector("tbody")!;
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  `;
    tbody.appendChild(row);
});

document.body.appendChild(table);
