
function getDataFromInternet(successCallback) {
    console.log('Getting data from internet');

    setTimeout(() => {
        successCallback('KG Coding');   // assume we got data 'KG Coding' after 3ms from the internet which is being passed to callback
    }, 3000);
}

function setDataToDB(successCallback) {
    console.log('Sending data to DB');

    setTimeout(() => {
        successCallback('db_row_25');   // assume, 25th row me data save kar diya gaya hai after 2ms aur id 'db_row_25' return hui hai jisko humne callback me pass kar diya hai
    }, 2000);
}

function sendResponseToUser(successCallback) {
    console.log('Sending response to user');

    setTimeout(() => {
        successCallback();      // assume, response has been sent to User after 5ms, after that callback is called
    }, 5000);
}

getDataFromInternet((data) => {
    console.log(`Data is fetched: ${data}`);
    setDataToDB((id) => {
        console.log(`Data is saved in DB with id ${id}`);
        sendResponseToUser(() => {
            console.log('Response is send to user');
        });
    })
})