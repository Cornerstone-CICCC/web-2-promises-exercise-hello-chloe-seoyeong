const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstname, lastname, age, hobbies;
fs.readFile('firstname.txt', 'utf-8')
  .then( data => {
    firstname = data;
    return fs.readFile('lastname.txt', 'utf-8');
  })
  .then( data => {
    lastname = data;
    return fs.readFile('age.txt', 'utf-8');
  })
  .then( data => {
    age = data;
    return fs.readFile('hobbies.txt', 'utf-8');
  })
  .then( data => {
    hobbies = JSON.parse(data);
    console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`)
  })
  .catch(err => {
    console.error(`THEN-CATCH Error: ${err}`);
  })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
