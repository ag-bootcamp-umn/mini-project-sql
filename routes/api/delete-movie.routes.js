const router = require('express').Router();

const db = require("../../config/connect")

router.delete("/:id", (req, res) => {
  db.query(`
  DELETE FROM movies WHERE id = ?
  `,
  req.params.id,
  (err, data) => {
    res.json({ status: "success", payload: data })
  });
})



module.exports = router;