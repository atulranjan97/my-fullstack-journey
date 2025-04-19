const Favourite = require('./favourite');
const airbnbDb = require('../util/database-util');

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl, description) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.description = description;
    }

    save(homeId) {
        if (homeId) {
            // Method 1: Direct String Interpolation (UNSAFE)
            //    return airbnbDb.execute(`INSERT INTO homes(houseName, price, location, rating, photoUrl, description) VALUE ('${this.houseName}', ${this.price}, '${this.location}', ${this.rating}, '${this.photoUrl}', '${this.description}')`) 

            // Method 2: Parameterized Query (SAFE)
            return airbnbDb.execute(`INSERT INTO homes(houseName, price, location, rating, photoUrl, description) VALUE (?, ?, ?, ?, ?, ?)`, [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description]) 
            // This is the recommended way to write SQL queries because:
            // 1. Prevents SQL Injection attacks:
            //    - SQL injection is when malicious users insert SQL code through input fields
            //    - For example, if houseName input was "'); DROP TABLE homes; --"
            //    - Method 1 would execute that as SQL code and could delete your table!
            //    - Method 2 treats all inputs as plain values, never as SQL code
            //
            // 2. Cleaner and easier to read:
            //    - Uses ? as placeholders instead of messy string concatenation
            //    - Values are passed separately in an array
            //    - MySQL driver automatically handles proper escaping of values
            //
            // 3. Better performance:
            //    - Database can reuse the query plan since query structure stays same
            //    - Only the values change, not the whole query string
            //
            // The ? marks are replaced in order by the values in the array:
            // 1st ? = this.houseName
            // 2nd ? = this.price
            // And so on...

            // no need to insert id, kyunki db id ko auto generate karta hai humare liye.
            // SQL injection: matlab aap data ki form me SQL ki query ko inject kar rahien hai kisi ke program me.
        } else {
            return airbnbDb.execute(`UPDATE homes SET houseName = ?, price = ?, location = ?, rating = ?, photoUrl = ?, description = ?) WHERE id = ?`, [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description] )
        }
    }   


    static fetchAll(callback) {
        return airbnbDb.execute("SELECT * FROM homes");
    }
    

    static findById(homeId) {
        return airbnbDb.execute("SELECT * FROM homes WHERE id=?", [homeId])
        // This line executes a SQL query to find a specific home by its ID:
        // 1. "SELECT * FROM homes WHERE id=?" is a parameterized SQL query where:
        //    - SELECT * means get all columns
        //    - FROM homes specifies the homes table
        //    - WHERE id=? filters for a specific ID (? is a placeholder)
        // 2. [homeId] is a value that replaces the ? placeholder
        // 3. Returns a promise that resolves to [[home], fields] where:
        //    - [home] is an array containing all those homes whose id is equal to homeId(or empty if not found), althought hum jante hai ki db me har homes ke liye unique id assign hoti hai toh array mein single home hi aane wala hai.
        //    - fields contains metadata about the table columns

        // file system ki tarah ab pehle sara ka sara data fetch krke home find nahi kar rahe balki sirf ek particular id wala hi home find kar rahien hai bina sara data fetch kiye and that makes it more efficient.
    }


    static deleteById(homeId) {
        return airbnbDb.execute("DELETE FROM homes WHERE id=?", [homeId])
    }
    
}
