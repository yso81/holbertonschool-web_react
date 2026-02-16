interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
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
  firstName: "Alice",
  lastName: "Wonderland",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: "Paris",
  contract: true,
  specialization: "Math",
  numberOfCourses: 5
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "The Builder",
  fullTimeEmployee: false,
  location: "London",
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

// Define an interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Define an interface for the StudentClass
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

const student: StudentClassInterface = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
