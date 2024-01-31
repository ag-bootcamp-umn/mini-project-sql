const router = require('express').Router();

const db = require("../../config/connect")

router.get('/', (req, res) => {
  db.query(`
  SELECT movies.name AS movie, reviews.author AS author, reviews.description AS description
FROM reviews 
INNER JOIN movies ON reviews.movie_id = movies.id;
`, (err, data) => {
    res.json({ status: "success", payload: data })
  })
});

module.exports = router;

/*
SELECT movies.name AS movie, reviews.author AS author, reviews.description AS description
FROM reviews 
INNER JOIN movies ON reviews.movie_id = movies.id;
*/