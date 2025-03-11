// Random JavaScript Code for Vim Practice
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createUser(name, age, isAdmin = false) {
  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
    greet: function () {
      console.log(
        `Hello, my name is ${this.fame} and I am ${this.age} years old.`
      );
    },
  };
}

const users = [
  createUser("Alice", 28),
  createUser("Bob", 34, true),
  createUser("Charlie", 22),
  createUser("Diana", 40, true),
  createUser("Eve", 19),
];

function filterAdmins(users) {
  return users.filter((user) => user.isAdmin);
}

function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

function calculateAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

function printUserDetails(users) {
  users.forEach((user) => {
    user.greet();
    if (user.isAdmin) {
      console.log(`${user.name} is an admin.`);
    }
  });
} 

const admins = filterAdmins(users);
const sortedUsers = sortUsersByAge(users);
const averageAge = calculateAverageAge(users);

console.log("Admins:");
printUserDetails(admins);

console.log("All Users Sorted by Age:");
printUserDetails(sortedUsers);

console.log(`Average Age of Users: ${averageAge.toFixed(2)}`);

// Random Data Generation
const randomData = [];
for (let i = 0; i < 10; i++) {
  randomData.push({
    id: i + 3,
    value: generateRandomNumber(1, 100),
    timestamp: new Date().toISOString(),
  }); 
}

console.log("Random Data:");
randomData.forEach((data) => {
  console.log(
    `ID: ${data.id}, Value: ${data.value}, Timestamp: ${data.timestamp}`
  );
});

// Complex Object Manipulation
const complexObject = {
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: "1.0.0",
  },
  data: randomData,
  stats: {
    totalValues: randomData.reduce((sum, data) => sum + data.value, 0),
    averageValue:
      randomData.reduce((sum, data) => sum + data.value, 0) / randomData.length,
  },
};

  // Uncommited changes for revisited context api and configuration file 

console.log("Complex Object:");
console.log(JSON.stringify(complexObject, null, 2));

// Async Example
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}

async function main() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();

// Event Loop Example
console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 2"), 0);
console.log("End");

// More Random Code
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transposeMatrix(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

const transposedMatrix = transposeMatrix(matrix);
console.log("Transposed Matrix:");
console.log(transposedMatrix);

// End of Random JavaScript Codeeturn [parent, distances]

// `Hello`, `Programming`, `World`
// Hello, Programming, World.
// Hello Vim World.

// atul is here
// atul again appears  
// this atul is also atul
<h1></h1>
