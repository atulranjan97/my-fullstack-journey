// Create a new Date object for the current date and time
const currentDate= new Date();
console.log('Current Date:', currentDate);                                  // Output: Current Date: Fri Dec 20 2024 04:27:08 GMT+0530 (India Standard Time)

/* Key methods */

// getTime(): Milliseconds since Epoch
// Get the current timestamp in milliseconds since January 1, 1970
console.log('Current Time (ms since 1970):', currentDate.getTime());        // Output: Current Time (ms since 1970): 1734649035368


// getFullYear(): 4-digit year
// Get the current year
console.log('Current Year:', currentDate.getFullYear());                    // Output: Current Year: 2024


// getMonth(): 
// Get the current month (0 = January, ... , 11 = December)
console.log('Current month:', currentDate.getMonth());                      // Output: Current month: 11


// getDate(): 
// Get the current date of the month
console.log('Date of the month:', currentDate.getDate());                   // Output: Date of the month: 20

 
// getDay(): Day of the week
// Get the current day of the week (0 = Sunday, ... , 6 = Saturday )        
console.log('Day of the Week:', currentDate.getDay());                      // Output: Day of the Week: 5


// getHours()
console.log('Current hour:', currentDate.getHours());                       // Output: Current hour: 4


// getMinutes(): Current minute
// Get the current minute
console.log('Current Minute:', currentDate.getMinutes());                   // Output: Current Minute: 27



// Create a specific date (eg., December 25, 2024)
const specificDate = new Date("2024-12-25");                                

// Log the specific date
console.log('Specific Date:', specificDate.toDateString());                 // Output: Specific Date: Wed Dec 25 2024   

// Crucial for timestamps, scheduling, etc.