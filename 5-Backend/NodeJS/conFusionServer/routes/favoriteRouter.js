const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

const Favorites = require('../models/favorites');

const favoriteRouter = express.Router();

favoriteRouter.use(bodyParser.json());

// The /favorites API endpoint:
favoriteRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorites.findOne({ user: req.user._id })
            .populate('user')
            .populate('dishes')
            .then((favorites) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(favorites);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .patch(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PATCH operation not supported on /favorites!');
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /favorites!');
    })

    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorites.findOne({ user: req.user._id })
            .then(favorites => {
                if (favorites) {
                    const newFavorites = favorites;

                    req.body.forEach(dish => {
                        if (!newFavorites.dishes.some(item => item._id.equals(dish._id))) {
                            newFavorites.dishes.push(dish._id);
                        }
                    });

                    newFavorites
                        .save()
                        .then(() => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(newFavorites);
                        })
                        .catch((err) => next(err));
                } else {

                    const newFavorites = new Favorites({ user: req.user._id, dishes: [] });

                    req.body.forEach(dish => {
                        if (!newFavorites.dishes.some(item => item._id.equals(dish._id))) {
                            newFavorites.dishes.push(dish._id);
                        }
                    });

                    newFavorites
                        .save()
                        .then(() => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(newFavorites);
                        })
                        .catch((err) => next(err));
                }
            })
            .catch((err) => next(err));
    })

    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

        Favorites.deleteOne({ user: req.user._id })
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));

    });


// The /favorites:dishId API endpoint
favoriteRouter.route('/:dishId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

        //Sure, why not? Return that particular favorite.

    })
    .patch(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PATCH operation not supported on /favorites/' + req.params.dishId);
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /favorites/' + req.params.dishId);
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {

        // add the specified dish to the list of the user's list of favorite dishes, if the dish is not already in the list of favorite dishes.

    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorites.findOne({ user: req.user._id })
            .then((favorites) => {
                if (favorites) {
                    const newFavorites = favorites;

                    newFavorites.dishes = newFavorites.dishes.map((dish) => {
                        if (dish._id.equals(req.params.dishId)) {
                            return undefined;
                        }
                        return dish;
                    });

                    newFavorites
                        .save()
                        .then(() => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(newFavorites);
                        })
                        .catch((err) => next(err));
                } else {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'application/json');
                    res.end('Not found');
                }
            });
    });

module.exports = favoriteRouter;