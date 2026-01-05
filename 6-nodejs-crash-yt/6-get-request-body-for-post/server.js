import { createServer } from 'http';
const PORT = process.env.PORT;

// assume this data is coming from the database
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
];


// middleware are basically modules or functions that have access to the request and response object because they sit in the middle of incoming request and outgoing responses and they can perform basically execution of any code that you want , you can execute any code and you can also make changes to the request and response objects   

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}
 
// Router handler for GET /api/users (they're normal functions used as route handlers, not middlewares, because they terminate the request-response cycle)
const getUsersHandler = (req, res) => {
    console.log('getUsersHandler executed');
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id (they're normal functions used as route handlers, not middlewares, because they terminate the request-response cycle)
const getUserByIdHandler = (req, res) => {
    console.log('getUserByIdHandler executed');
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {     // if user exists
        res.write(JSON.stringify(user));
    } else {    // if user doesn't exist
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
    }
    res.end();
}

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });   // here we are listening for specific event and that event is called data

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);    // in reality we would be adding new user to database but for now we are just adding it in memory to under the concept
        res.statusCode = 201;   // status code 201 mean successful and something was created
        res.write(JSON.stringify(newUser));
        res.end();
    })
    // the new user added is just in memory so if the server restarts , the new user will go away and no longer be there.
}

// Not found handler
const notFoundHandler = (req, res) => {
    console.log('notFoundHandler executed');
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}




// const server = createServer((req, res) => {
//     logger(req, res, () => {
//         jsonMiddleware(req, res, () => {
//             if (req.url === '/api/users' && req.method === 'GET') {
//                getUsersHandler(req, res);
//             } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
//                 getUserByIdHandler(req, res);
//             } else if(req.url === '/api/users' && req.method === 'POST') {
//                      createUserHandler(req, res);
//             } else {
//                 notFoundHandler(req, res);
//             }
//         })
//     })
// })

// is same as

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            switch (req.method) {
                case 'GET':
                    if (req.url === '/api/users')
                        getUsersHandler(req, res);
                    else if (req.url.match(/\/api\/users\/([0-9]+)/)) 
                        getUserByIdHandler(req, res);
                    else 
                        notFoundHandler(req, res);

                    break;
            
                case 'POST':
                    if (req.url === '/api/users') {
                        createUserHandler(req, res);
                    }
                    break;

                default:
                    break;
            }
        })
    })
})


//  `/\/api\/users\/([0-9]+)/` is a regular expression used to match a URL path where `/api/users/` is followed by a numeric user ID; the outer `/ /` marks it as a regex in JavaScript, `\/` means a literal forward slash `/` (`/` is a special character and to match a real `/`, you must escape it using `\`), `api` and `users` must match exactly, the second `\/` matches the slash before the ID, `[0-9]` matches any digit from 0 to 9, `+` means one or more digits, and `([0-9]+)` groups those digits so they can be captured and extracted later (for example, matching `/api/users/45` and capturing `45` as the user ID).
// A regular expression is just a pattern used to check or find text. It's like a filter for strings
// we are using regular expression for route matching
// only allow string url which matches this pattern -> /api/users/(numeric user id)


// this is beginning of the rest api. It's very kind of messy code and it's confusing that because it's just the http module and normally we are going to use a framework like express



server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// middleware are basically modules or functions that have access to the request and response object because they sit in the middle of incoming request and outgoing responses and they can perform basically execution of any code that you want , you can execute any code and you can also make changes to the request and response objects   