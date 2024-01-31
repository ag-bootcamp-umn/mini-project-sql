// I'm going to put all my product routes here
const router = require('express').Router();
const authenticate = require("../../middleware/authenticate")


router.get("/", authenticate, (req, res) => {
  console.log(req.database.products[0])

  res.json({ status: "Ravens beat the Texans. Ha ha Jessica.", database: req.database })
})

router.get("/:id", (req, res) => {
  //...
})

router.post("/", (req, res) => {
  //...
})

router.put("/:id", (req, res) => {
  //...
})

router.delete("/:id", (req, res) => {
  //...
})


module.exports = router;