// Task 3: Require the file system to create "welcome.txt" containing "Hello Node",
// then read and console.log data from "hello.txt"
const fs = require('fs');

// Create welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt has been created.');
});

// Read from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data from hello.txt:', data);
});
