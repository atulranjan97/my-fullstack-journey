import colors from 'colors';

const logger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'yellow',
        PUT: 'blue',
        DELETE: 'red'
    }

    const color = methodColors[req.method] || white;

    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]
    );

    next(); // this will call next piece of middleware in the stack
}
// you can see how much freedom you have with express, it's very minimalistic and you can use all types of libraries to do what you want and create any kind of middleware that you want. You have total control over the whole request-response cycle

export default logger;