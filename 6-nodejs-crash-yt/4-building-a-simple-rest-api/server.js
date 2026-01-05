import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
];

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if (user) {     // if user exists
            res.write(JSON.stringify(user));
        } else {    // if user doesn't exist
            res.statusCode = 404;
            res.write(JSON.stringify({ message: 'User not found' }));
        }
        res.end();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'Route not found' }));
        res.end();
    }
})

//  `/\/api\/users\/([0-9]+)/` is a regular expression used to match a URL path where `/api/users/` is followed by a numeric user ID; the outer `/ /` marks it as a regex in JavaScript, `\/` means a literal forward slash `/` (`/` is a special character and to match a real `/`, you must escape it using `\`), `api` and `users` must match exactly, the second `\/` matches the slash before the ID, `[0-9]` matches any digit from 0 to 9, `+` means one or more digits, and `([0-9]+)` groups those digits so they can be captured and extracted later (for example, matching `/api/users/45` and capturing `45` as the user ID).
// A regular expression is just a pattern used to check or find text. It's like a filter for strings
// we are using regular expression for route matching
// only allow string url which matches this pattern -> /api/users/(numeric user id)


// this is beginning of the rest api. It's very kind of messy code and it's confusing that because it's just the http module and normally we are going to use a framework like express



server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// we are going to listen for like POST request to add a user
// GET request to get the users
// PUT request to update
// DELETE request to delete

