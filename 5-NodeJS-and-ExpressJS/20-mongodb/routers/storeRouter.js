// External Module
const express = require('express');

const storeRouter = express.Router();

const storeController = require('../controllers/storeController');

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
// jab hum router me color(:) define karte hai kisi cheez ke sath toh ye samajh jayega ki ye homeId path ke ander nahi aane wala hai, /homes ke baad yaha koi value aane wali hai aur us value ka naam `homeId` rakh dena

storeRouter.get("/favourites", storeController.getFavourites);
storeRouter.post("/favourites", storeController.postAddFavourites);
storeRouter.post("/favourites/delete/:homeId", storeController.postRemoveFavourites);

module.exports = storeRouter;
