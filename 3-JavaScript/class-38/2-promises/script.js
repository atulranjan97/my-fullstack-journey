// ab jab mai kisiko bolunga ki jab yeh kaam pura ho jayega toh mera ye kaam execute kar dena toh mai usko callback nahi de raha hounga, vo mujhe promise de raha hoga

// promise resolve humesha us value ke sath hoga jo value expected thi at the time of promise.
// promise reject bhi humesha reason ke sath hoga 
// jab hum promises ke sath kaam karenge toh hum callback pass nahi karenge, abhi tak kya  hota tha jisko bhi baad me koi kaam execute karna hai vo caller se expect karta tha ki aap mujhe callback de dijiye, is baar ulta hoga, yani vo ye bolega ki mai aapko promise de raha hu jab kaam pura ho jayega toh is promise ko check kar lena, tab ye promise fullfill ya reject ho chuka hoga, fullfill ho chuka hoga toh ek value ke sath fullfill hoga, reject ho gaya hoga toh ek reason ke sath reject hoga.

// actually promise create karna sabse difficult hai, in 99% of the cases jab aap normal code likh rahe honge to aap promise create nahi karenge, promise to hume create karke system de raha hoga alag-alag cases me eg. fetchApi or any database operation , aap mostly inko use karte hai, promise create vo karenge, aap unko use karenge, so promise creation generally kam karna hota hai, mostly kisi ka promise aya toh usko use kaise karna hai ye dekhna hota hai

// agar promise successful hoga to 

function getDataFromInternetUsingPromise() {
    // Promise ek existing class hai jiska object hum create kar sakte hai
    let promise = new Promise((resolve, reject) => {
        // resolve and reject are provided by the JS engine
        console.log('Getting data from internet using Promise');


        // create a synchronous delay using a busy-wait loop
        let time = new Date().getTime();
        while ((new Date().getTime()) - time <= 8000) {
            // Busy-wait loop
            // it blocks the main thread
        }
        // this line is added to simulate delay for getting data from the internet, not using `setTimeout` for simulating delay because that creates `async` delay (means doesn't block the main thread)


        // suppose kuch delay ke baad ye promise gya and internet se data lekar aaya ie. 'KG Coding'
        resolve('KG Coding');
        // so, once we got the data, callback ki jagah humne `resolve` ko call kar diya with data we got.
        // resolve me hum generally complex object(bada data ka object) pass karte hai

        // suppose kuch delay ke baad data nahi mila due to some issue, in this case we call `reject` with a string denoting error
        // reject('Internet Timeout');
        // reject me generally string reason pass kar rahe hote hai
    });    

    return promise; 
}

getDataFromInternetUsingPromise()
.then((data) => {       // Used to handle fulfilment/ success case
    console.log(`Data is fetched: ${data}`);
})
.catch((error) => {     //  Used to handle rejection
    console.log(`Error: ${error}`);
})
.finally(() => {        // Executes a block of code regardless of the promise's outcome
    console.log('Resource successfully cleaned up');
});
// The executor function inside a `Promise` gets executed immediately when the `Promise` is created, regardless of whether or not the `.then()` or `.catch()` methods are attached later.
// The executor function runs as soon as the `Promise` is created. However, the `.then()` or `.catch()` handlers only execute when the promise is resolved or rejected.

/*-------------------------------------------------------------------------------------------------------------------------------------------------------
// Promise executes immediately the moment it is created 

function getDataFromInternetUsingPromise() {
    // Promise ek existing class hai jiska object hum create kar sakte hai
    let promise = new Promise((resolve, reject) => {
        console.log('promise body');
    });    
    return promise; 
}

getDataFromInternetUsingPromise()   // promise start getting executed here

// jaise hi hum promise banate hai, vo turant execute hona start ho jata hai, ye behaviour har jagah consistent nahi hota, bahut sari jagah par jab hum reactive programming execute karte hai toh initial structure execute hona tab tak start nahi hota jbtak uske handlers nahi aate, pr JS me aisa nahi hai, jaise hi hum promise create karte hai, immediately execute hona start ho jata hai

*/