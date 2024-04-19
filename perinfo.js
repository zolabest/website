// Define an object to store personal information
const personInfo = {
  fullName: "Zola Tadesse",
  age: "unknown", 
  hometown: "Mekhoni",
  favoriteColor: "blue",
  isStudent: false
};

// Output the full name using a template literal for improved readability
console.log(`Full name is ${personInfo.fullName}.`);

// Output the age; handle 'unknown' age gracefully
console.log(`My age is ${personInfo.age}.`);

// Output the favorite color
console.log(`My favorite color is ${personInfo.favoriteColor}.`);

// Check if the person is a student and output an appropriate message
console.log(`${personInfo.isStudent ? "I am a student." : "No, I am not a student."}`);

  

