
function getDataFromInternetUsingPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // assume we got data 'KG Coding' after 3ms from the internet 
            let dataFetched = 'KG Coding';
            resolve(dataFetched);

            // reject('Internet Timeout');
        }, 3000);
    })
}


function setDataToDBUsingPromise(data) {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            // assume, 25th row me data save kar diya gaya hai after 2ms 
            resolve('db_row_25');

            // reject("Network issue, can't reach to db");
        }, 2000);
    })
}

function sendResponseToUserUsingPromise(key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // assume, response has been sent to User after 5ms
            resolve();

            // reject('Failed to send response to user');
        }, 3000);
    })
}

console.log('Getting data from the internet');
getDataFromInternetUsingPromise()
.then((data) => {
    console.log(`Data fetched is ${data}`);
    return setDataToDBUsingPromise(data);
})
.then((key) => {
    console.log(`Data is saved in DB with id ${key}`);
    return sendResponseToUserUsingPromise();
})
.then(() => {
    console.log('Response sent to user');
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('Resource cleaned up successfully');
})

// Each step `returns a promise` that resolves after a timeout. The steps are chained together using `.then()`, making the code more readable and easier to maintain.
