function getDataFromInternet() {
    console.log('Getting data from internet');

    setTimeout(() => {
        // assume we got data 'KG Coding' after 3ms from the internet
        console.log('Data retrived is: KG Coding');
        return 'KG Coding';
    }, 3000);
}

function setDataToDB(data) {
    console.log(`Sending data(${data}) to DB`);

    setTimeout(() => {
        // assume, 25th row me data save kar diya gaya hai 
        console.log('Data sent to DB successfully, key: db_row_2');
    }, 2000);
}

function sendResponseToUser() {
    console.log('Sending response to user');

    setTimeout(() => {
        // assume, response has been sent to User after 5ms, after that callback is called
        console.log('Response successfully sent to user');
    }, 5000);
}

let data = getDataFromInternet();
let dbKey = setDataToDB(data);
sendResponseToUser();


