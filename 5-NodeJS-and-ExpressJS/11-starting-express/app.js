// External Module
const express = require('express');     // returns a function

const app = express();

// First Middleware
app.use((req, res, next) => {
    console.log('First Middleware', req.url, req.method);
    next();     // next ko call karne ka matlab hai ki ab request ko aage wale middleware par bhej do
})
// agar aap response bhejne wale ho tab to next call mat karna, aur agar aap response nahi bhejne wale ho to 
// kisi middleware ka poora code async ho skta hai, agar ye `app.use` ka execution khatm bhi ho gaya toh ho sakta hai humne koi callback laga kar rakha ho ya koi network call karke rakha ho and baad me hum response bhejne wale ho, express ko ye kaise pata chalega ki aap response bhejne wale ho ya kisi aur ko bolein, yani kisi aur middleware se bolien ki bhai aap response bhejoge kya, to voh ye tareeka hai next() batane ka. Agar aap next call nahi karte ho to express ye maan kar chal raha ki aap abhi bhi request ke sath kuch kar rahe ho and request ki handling aap hi kar rahe ho, and agar aap next call kar dete ho to aap ek tarah se express ko bata rahe ho ki bhai mereko jo handling karni thi maine kar li iske baad ki ab jo handling hai vo jo bhi next middleware laga hai aap usko de dijiye.


// Second Middleware
app.use('/test',(req, res, next) => {
    console.log('Second Middleware', req.url, req.method);
    res.send('<h1>Complete Coding</h1>')
})
// yaha par jo hum path dete hai vo exact match nahi hota hai vo bas ye dekhta hai ki ye mera path hai ya fir mera hi koi child path hai(matlab mere hi aage koi further path define kiya gaya hai), agar mere hi aage koi further path define kiya gaya hai toh uske liye bhi mai chal jaunga otherwise mai nahi chalungs. Yani ye middleware '/test' ke liye to chalega hi, sath ke sath '/test/xyz' ke liye bhi chal jayega.
// so agar koi sirf '/' ke liye aa raha hai to sirf pehle wala middleware chalega and ye middleware nahi chalega, but agar koi '/test' ke liye aa raha hai toh dono humare middleware chalenge. 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);
})

// `express` bhi internally `http` core module ka hi use kar rha hai 


// Handling Routes
// 1. Order matters: jis order me middleware lagayenge usi order me execution hoga.
// 2. Cannot call next() after send()
// 3. '/' matches everything
// 4. Calling res.send implicitly calls res.send()
