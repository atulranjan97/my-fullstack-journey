const fs = require("fs");

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//     if (err) throw err;
//     console.log(data);
// });

fs.readFile("./message.txt", (err, data) => {
    if (err) throw err;
    
    const parsedData = data.toString();
    console.log(parsedData);
})

// fs.readFile("./message.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })