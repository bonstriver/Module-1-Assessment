const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the PASSWORD VALIDATOR tool')

reader.question("Please enter your PASSWORD for VALIDATION: ", function(input){
	tokens = input.split(' ');	
	password = tokens[0]; 

    if (password.length < 10){
        console.log("Your PASSWORD needs to be at least 10 characters long.")
    } else console.log(`Thank you. Consider your PASSWORD ("${password}") VALIDATED.`)

    reader.close()
})
