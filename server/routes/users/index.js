const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return new req.database.User()
    .fetchAll()
    .then(users => {
      console.log(users);
      return res.json(users);
    })
    .catch(err => {
      console.log(err);
      res.sendStatis(500);
    });
});

module.exports = router;
