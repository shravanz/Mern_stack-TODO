const mongooose = require("mongoose");
const Schema = mongooose.Schema;

//create Schema

const ItemSchema = new Schema({
  name: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongooose.model("item", ItemSchema);
