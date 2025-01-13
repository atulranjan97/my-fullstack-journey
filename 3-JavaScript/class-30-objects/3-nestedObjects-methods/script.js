// run the file in browser tab with index.html(not with node terminal)
console.log('Learning objects');

// Objects can contain other objects and are called nested objects.
let product = {
    company: 'Nike',                
    'item-name': 'Running Shoes',   
    price: 2500,                    
    avgRating: 4.5,                 
    numberOfRatings: 38,
    rating: {
        fiveStar: 10,
        fourStar: 5,
        threeStar: 3,
        twoStar: 12,
        oneStar: 8,

        // we can also define a function inside an object
        showRating: function() {
            let totalRating = this.fiveStar + this.fourStar + this.threeStar + this.twoStar + this.oneStar;
            console.log('Total Ratings:', totalRating);
            
            let averageRating = (5 * this.fiveStar + 4 * this.fourStar + 3 * this.threeStar + 2 * this.twoStar + 1 * this.oneStar) / totalRating;
            console.log('Average Rating:', averageRating);
        },
    },
    
}

console.log(product.rating);
console.log(product.rating.fiveStar);
product.rating.showRating();

/*
function showRating(rating) {
    let totalRating = rating.fiveStar + rating.fourStar + rating.threeStar + rating.twoStar + rating.oneStar;
    console.log('Total Ratings:', totalRating);
    
    let averageRating = (5 * rating.fiveStar + 4 * rating.fourStar + 3 * rating.threeStar + 2 * rating.twoStar + 1 * rating.oneStar) / totalRating;
    console.log('Average Rating:', averageRating);
}

showRating(product.rating);
*/

// let rating = {
//     fiveStar: 10,
//     fourStar: 5,
//     threeStar: 3,
//     twoStar: 12,
//     oneStar: 8,
// }
