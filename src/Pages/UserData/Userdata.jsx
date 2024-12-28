// Import necessary libraries for random data generation
import { faker } from "@faker-js/faker";

// Function to generate a random user
const generateRandomUser = (id) => {
  const randomDate = faker.date.past(); // Generates a random past date
  const formattedDate = randomDate.toLocaleDateString("en-GB"); // Formats the date as DD/MM/YYYY

  return {
    id: id.toString(),
    projectName: faker.company.name(), // Generates a company/project name
    sentDate: formattedDate, // Formats the date
    amount: faker.finance.amount(100, 10000, 2, "$"), // Generates a monetary amount
    customerName :faker.company.name()
  };
};

// Generate 10000 users
const users = [];
for (let i = 1; i <= 10; i++) {
  users.push(generateRandomUser(i));
}

// Export users or print the data
console.log(users);

export default users;
