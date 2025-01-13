// Refer the notes

function hello(name) {
    // console.log('Hello ' + name);
    console.log(`Hello ${name}`);
}

function capitalize(name) {
    let upperCase = name.toUpperCase(name);
    console.log(upperCase);
}

function processUserInput(fun) {
    // let studentName = prompt('Enter your name');
    let studentName = 'Atul';
    fun(studentName);
}
// This is a `pure` function because is function ki dependency kisi bhi function pr nahi hai(means this function is independent of any outside body)

processUserInput(hello);        // Output: Hello Atul
processUserInput(capitalize);   // Output: ATUL

// A callback is a function passed as an argument to another function, which is then invoked inside that function to complete some kind of routine or action.
// Usage: Callbacks are commonly used in asynchronous programming to execute code after an asynchoronous operation has completed.