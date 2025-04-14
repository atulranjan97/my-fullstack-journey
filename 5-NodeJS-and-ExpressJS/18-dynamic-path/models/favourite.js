const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');

const favouriteFilePath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {
    static fetchAll(callback) {
        fs.readFile(favouriteFilePath, 'utf-8', (err, data) => {
            if (err) {
                callback([]);
            } else {
                if (data)
                    callback(JSON.parse(data));     // passing array of all favourite home id's
                else
                    callback([]);
            }
        })
    }

    static addToFavourite(homeId, callback) {
        Favourite.fetchAll(favouriteIds => {
            if (!favouriteIds.includes(homeId)) {
                favouriteIds.push(homeId);
                fs.writeFile(favouriteFilePath, JSON.stringify(favouriteIds), callback);
                console.log('Your new favourite is added successfully');
            } else {
                console.log('You have added this home to favourites already');
                callback(); // Call the callback even in the else case
            } 
        })
    }


    static deleteById(removeHomeId, callback) {
        Favourite.fetchAll(homeIds=> {
            const newHomesIds = homeIds.filter(homeId => removeHomeId !== homeId);
            fs.writeFile(favouriteFilePath, JSON.stringify(newHomesIds), callback);
        })
    }
}

