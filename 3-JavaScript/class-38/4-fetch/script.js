console.log('Fetch')
// visit for clear explanation: https://www.youtube.com/watch?v=JcwvnxCB8-w

// humne below url(server) par call bheji hai, uska type tha `GET`
fetch('https://jsonplaceholder.typicode.com/users')     // this is a promise when fulfilled returns a response object which contains json data in its `body` property
.then(res => { 
    console.log(res);
    console.log(res.status);
    console.log(res.ok)
    console.log(res.headers['Transfer-Encoding']);

    // Parse JSON from the response body (body is a property of response object which contains json data)
    return res.json()   // res.json() returns a promise as it is a time taking operation
    // Fetch api returns the data which is a stream(Readable stream)
    // what is a stream: it is a chunks of data, instead of passing the entire data over the network it passes the data in chunks in network which increase performance
})     
.then(json => console.log(json))    // Logs the parsed JavaScript object
    
// The `fetch` API returns a Response object.
// The response body (`response.body`) is not raw JSON or plain text. It's a stream, which means the data needs to be read before it can be used.
// The `.json()` method reads the stream, converts it to a string, and then parses that string into a JavaScript object — all in one step. It's a long process that's why it returns a promise.

/*
How .json() Works
    1. It Reads the Response Body:
        - The response body from a `fetch` call is a stream, meaning the data needs to be read before it can be used.

    2. It Converts the Stream to Text:
        - Internally, `.json()` first converts the stream into a string.

    3. It Parses the Text as JSON:
        Once converted to a string, `.json()` parses the text into a JavaScript object or array.

    4. It Returns a Promise:
        - `.json()` returns a Promise because reading and parsing the response body takes time (asynchronous operation).
        - The Promise resolves with the parsed JavaScript object.
*/




// For detailed explanation visit:  https://www.notion.so/Why-using-json-on-response-get-from-fetch-168052c4d3f98058a471febed83dc7e0
// https://www.notion.so/fetch-and-json-168052c4d3f980bfbb03fa5fe4a50968