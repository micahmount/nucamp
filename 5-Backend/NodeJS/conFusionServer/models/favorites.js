const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteDishSchema = new Schema({
    dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    },
})

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [favoriteDishSchema]

}, {
        userPushEach: true,
        timestamps: true
    });

const Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;