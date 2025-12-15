const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    houseName: {type: String, required: true},
    price: {type: String, required: true},
    location: {type: String, required: true},
    rating: {type: Number, required: true}, 
    photoUrl: String,
    description: String
});

homeSchema.pre('findOneAndDelete', function(next) {
    const homeId = this.getQuery()["_id"];

    Favourite.deleteMany({homeId})
    .then(() => next())
    .catch(err => {
        console.log('Error deleting favourite', err);
        next();
    });
});

module.exports = mongoose.model('Home', homeSchema);