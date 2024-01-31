const router = require('express').Router();

const db = require("../../config/connect");

router.put('/:id', (req, res) => {
  db.query(`
  UPDATE reviews
  SET author = '${req.body.author}',
      description = '${req.body.description}'
  WHERE id = ?
  `,
  req.params.id,
  (err, data) => {
    res.json({ status: "success", payload: data })
  })
});


module.exports = router;