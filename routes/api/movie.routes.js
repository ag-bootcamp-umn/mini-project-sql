const router = require('express').Router();

const db = require("../../config/connect")

router.get('/', (req, res) => {
  db.query("SELECT name FROM movies", (err, data) => {
    res.json({ status: "success", payload: data })
  })
});

module.exports = router;