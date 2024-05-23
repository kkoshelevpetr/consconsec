interface Student {
  name: string;
  age: number;
  // Additional properties can be added here as needed
}

const personalInfo: Partial<Student> = {
  name: "Riyad",
  age: 22,
  // Other properties can be included as they become relevant
};
