const express = require("express");
const router = express.Router();
//Items Model
const Item = require("../../model/Item");

// @route GET api/items
// @desc  GET All items
// @access public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) // -1 desending order
    .then(items => res.json(items))
    .catch();
});

// @route POST api/items
// @desc  Create a item
// @access public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

// @route DELETE api/items/:id
// @desc  Remove a item
// @access public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});
module.exports = router;
