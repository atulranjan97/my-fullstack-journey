(() => {
    let counter = 0;
    let increment = () => console.log(++counter);

    console.log('Start');
    increment();

    setTimeout(increment, 5000);

    console.log('End');
})();
/* Output: 
Start
1
End 

*/


(() => {
    let counter = 0;
    let increment = (head) => console.log(head, ++counter);

    console.log('Start');
    increment('first');

    let timerId = setTimeout(() => increment('timer'), 5000);
    // setTimeout me jo bhi function pass karenge vo koi argument nahi le sakta varna vo argument pass kaun karega, setTimeout ko jo function denge uske ander koi argument nahi hona chahiye, par humare increment ke ander toh argument hai, agar hum argument dene ki koshish karenge toh increment turant hi call ho jayega, hum increment ko turant call karne ki koshish nahi kar rahe, baad me call karne ki koshish kar rahe hai, toh humne ek empty arrow function define kar diya jiske ander increment call hota hai, toh jab bhi hum ye bina argument wala function call karenge to ye increment ko call kar dega timer argument ke sath
    console.log('timerId', timerId);

    console.log('End');
})();

/* Output:
            Start
            first 1
            timerId 1
            End
            timer 2
*/

(() => {
    let counter = 0;
    let increment = (head) => console.log(head, ++counter);

    console.log('Start');
    increment('first');

    let timerId = setTimeout(() => increment('timer'), 5000);
    console.log('timerId', timerId);
    setTimeout(() => {clearTimeout(timerId)}, 1000);
    // timeOut set hua 5s ke liye, 1s baad hi clearTimeout ne isko cancel kar diya

    console.log('End');
})();
/* Output:
            Start
            first 1
            timerId 1
            End
*/

// (() => {
//     let counter = 0;
//     let increment = (head) => console.log(head, ++counter);
//     let intervalId = setInterval(() => increment('interval'), 1000);
//     setTimeout(() => {clearInterval(intervalId)}, 10000);
    
// })();