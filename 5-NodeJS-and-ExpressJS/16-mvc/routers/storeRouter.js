// External Module
const express = require('express');

const storeRouter = express.Router();

const storeController = require('../controllers/storeController');

storeRouter.get("/", storeController.getHome);
// `storeRouter` ab sirf routing kar raha hai. yaha par jo main kaam hua karega aage chalke ki `storeRouter` jo hai vo bs ek path handle karta hai ie. '/', GET request uspe handle karta hai aur fir vo controller ko pass kar deta hai ki controller jo tumhara `getHome` function hai vo isko handle karega. Dhyaan rakhne wali baat ye hai ki yaha humne function ko execute nahi kiya hai, sirf reference pass kiya ha `getHome` ka and baki ka kaam controller kar raha hai. Controller create karne ka bs itna hi matlab hai ki humne router aur controller ko alag-alag kar liya hai and main jo responsibility yaha par controller ki humare hone wali hai, vo hone wali hai model ke sath interact karna, view ke sath interact karna aur response bhejna user ko, jo tino kaam yaha par ho rahein hai. 

module.exports = storeRouter;
