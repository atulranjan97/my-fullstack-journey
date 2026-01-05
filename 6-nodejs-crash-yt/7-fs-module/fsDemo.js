// import fs from 'fs';
import fs from 'fs/promises';

// we created a test.txt file in our repo

// readFile() - async version or callback version
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// readFileSync() - Synchronous version (it's blocking so if its a giant file that you are reading then its gonna stop the rest of your code so you usually want to use the asynchronous version)
const data = fs.readFileSync('./test.txt', 'utf-8');
console.log(data);


// readFile() - Promise version (using .then.catch) (import fs from 'fs/promises')
fs.readFile('./test.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));  

// readFile() - Promise version (async/await) (import fs from 'fs/promises')
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error); 
    }
}

readFile();