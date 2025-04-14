const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');

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
            registeredHomes.push(this);

            fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), callback);
        })

    }   

    static fetchAll(callback) {
        fs.readFile(homeFilePath, (err, data) => {
            if (err) {
                callback([]);
            } else {
                callback(JSON.parse(data));
            }
        })
    }
    // jab hum fetchAll implement karne ki koshish kar rahien hai to hum sabko ye bolenge ki bhai mai apko immediately return nahi kar sakta hu kyunki pehle mai is kaam ko worker thread ko dunga, vo jayega file ko read karke layega and jab vo read karke laa dega tab mai aapko home de sakta hu. so aap mujhe ek function pass kar dijiye and jab bhi mera kaam poora ho jayega to mai us function ko call kar dunga.
    // aap mujhe ek function pass kar do, jab bhi kaam poora ho jayega to mai is function ko call kar dunga 
    // yaha maine kaha aap mujhe ek function pass kardo, jisko bhi data chahiye, aur jab mera ye read file wala kaam poora ho jayega future me at some point tab mai aapka callback function call kar dunga jo is varible ke ander aapne mujhe pass kiya hai aur jo bhi mere pass final array hai registered homes ka vo mai aapko pass kar dunga. Agar mera koi error ho gaya file read karte time to us case me humne empty array return kar diya otherwise jo bhi data read hokar aaya tha file se usko humne pehle json se parse kiya and then callback ke ander pass kar diya.
    // Aur jo fetchAll call karne wale log hai vo bhi ab fetchAll ka koi return type expect nahi kar rahien hai, fetchAll ke ander apna ek function bana kar pass kar rahien hai ki jab bhi tumhara pass array of home aa jaye to mujhe mere function me de dena

    // `static` ka matlab hai ki ye method is class pr directly call ho sakta hai. object banane ki zarurat nahi.
    // jab bhi aapko chahiye registeredHome toh aap fetchAll() call kar lena, and then aapko puri registered Homes ki list mil jayegi.
}

// write and read karna async operation hai