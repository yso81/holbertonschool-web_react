interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [name: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log("printTeacher('John', 'Doe'):", printTeacher("John", "Doe"));
console.log("printTeacher('Alice', 'Smith'):", printTeacher("Alice", "Smith"));

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

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


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
