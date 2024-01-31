const router = require('express').Router();

const db = require("../../config/connect")

router.post("/", (req, res) => {
db.query(`
INSERT INTO movies(name) VALUES(?)`, req.body.name, (err, data) => {
  res.json({ status: "success", payload: data })
});
});


module.exports = router;