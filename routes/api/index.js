// This file acts as a gatekeeper for all my api routes

const router = require('express').Router();
const storeRoutes = require("./store.routes")
const productRoutes = require("./product.routes")
const customerRoutes = require("./customer.routes")
const movieRoutes = require("./movie.routes")
const movieReviewRoutes = require("./movie-review.routes")
const addMovieRoutes = require("./add-movie.routes")
const reviewRoutes = require("./review.routes")
const deleteMovieRoutes = require("./delete-movie.routes");

router.use("/store", storeRoutes)
router.use("/product", productRoutes)
router.use("/customer", customerRoutes)
router.use("/movies", movieRoutes)
router.use("/movie-reviews", movieReviewRoutes)
router.use("/add-movie", addMovieRoutes);
router.use("/review", reviewRoutes);
router.use("/movie", deleteMovieRoutes);







module.exports = router;