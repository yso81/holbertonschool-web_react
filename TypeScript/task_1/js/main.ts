interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [name: string]: any;
}


const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const teacher2: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Los Angeles',
  hourlyRate: 50,
};

console.log("Teacher 1:", teacher1);
console.log("Teacher 2:", teacher2);

const container = document.createElement("div");
container.className = "teacher-container";

container.innerHTML = `
  <h1>Holberton Task 1: Teacher Profiles</h1>
  
  <div class="card">
    <h2>Teacher 1: ${teacher1.firstName} ${teacher1.lastName}</h2>
    <pre>${JSON.stringify(teacher1, null, 2)}</pre>
  </div>

  <div class="card">
    <h2>Teacher 2: ${teacher2.firstName} ${teacher2.lastName}</h2>
    <pre>${JSON.stringify(teacher2, null, 2)}</pre>
  </div>
`;

document.body.appendChild(container);
