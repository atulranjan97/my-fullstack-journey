const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
}; 
// caps me likhne represent karta hai ki INITIAL_VALUE constant rakhenge.


const reducer = (store = INITIAL_VALUE, action) => {
    console.log('reducer called ', action);
    let newStore = store;
    if (action.type === 'INCREMENT') {
        newStore = {counter: store.counter + 1};
    } else if (action.type === 'DECREMENT') {
        newStore = {counter: store.counter - 1};
    } else if (action.type === 'ADDITION') {
        newStore = {counter: store.counter + action.payload.number};
    }
    return newStore; 
    
    // store immutable hota hai, uski value change nahi karte, humesha ek naya store bana kar dete hain.
    // Abhi hum maan ke chal rahien hai ki store ke ander ek single variable hai counter jiski initial value 0 hogi
}
// we set INITIAL_VALUE as default value for store, and ye value store me tabhi assign hogi jab store undefined hoga, toh ye value sirf first time hi assign hogi.  
// reducer function store and action as argument leta hai and inke basis par naya store generate karega.

const store = redux.createStore(reducer);
// console.log('store: ', store);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}
// ye subscriber har baar call hota hai jab bhi store redux ka store update hota hai.

store.subscribe(subscriber);
// arugument me subscriber funcion ka reference pass kar rahien hai. Subscriber yaha pass karne ka matlab hai ki subscriber function subscribe kar raha hai and jo bhi value changes hongi, subscriber humesha call hoga, vo uske baad jakar current value nikal kar access kar lega.

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'ADDITION', payload: {number: 7}});
// jab bhi hum koi bhi event ko dispatch karte hai to event dispatch hokar reducer ke paas jata hai, store ki existing value update hoti hai, naya store return hota hai, kyunki naya store return ho gaya hai toh vo subscriber ko redux call karega aur subscriber uski jake current value nikalke log kar dega. 


// node redux.js (command to run node server)