const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');
const Favourite = require('./favourite');

const homeFilePath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(callback) {
        Home.fetchAll(registeredHomes => {
            if (this.id) {      // edit case
                registeredHomes = registeredHomes.map(home => home.id !== this.id ? home : this);
            } else {        // new case
                this.id = Math.random().toString();
                registeredHomes.push(this);
            } 

            fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), callback);
        })

    }   

    static fetchAll(callback) {
        fs.readFile(homeFilePath, 'utf-8', (err, data) => {
            if (err) {
                console.log('error occurred while readFile operation');
                callback([]);
            } else {
                // console.log('readFile operation done successfully, data: ', data);
                if (data)
                    callback(JSON.parse(data));
                else
                    callback([]);
            }
        })
    }

    static findById(homeId, callback) {
        Home.fetchAll(homes => {
            const home = homes.find(home => home.id === homeId); 
            // `find` is an array method 
            // home ke paas ek id hoga aur agar vo equal ho jata hai mere homeId ke toh vhi return ho jayega
            callback(home);
            // agar home nahi mila hoga to home ki value undefined hogi toh undefined chala jayega callback mein. Agar home mujhe mil gya hoga(milne ki condition kya hai , meri id aur us home ki id same ho jaye vhi object return ho jayega jisko callback me pass kar denge)
        })
    }

    static deleteById(homeId, callback) {
        Home.fetchAll(homes => {
            const newHomes = homes.filter(home => home.id !== homeId);
            fs.writeFile(homeFilePath, JSON.stringify(newHomes), err => {
                if (err) {
                    callback(err);
                    return;
                }
                Favourite.deleteById(homeId, callback);
            });
        })
    }
    
}
