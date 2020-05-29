const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Badge = new Schema({
  firstName: String,
  lastName: String,
  twitter: String,
  email: String,
  company: String,
  avatarStyle: String,
  accesories: String,
  top: String,
  hairColor: String,
  clothes: String,
  clothesColor: String,
  eyes: String,
  eyebrow: String,
  mouth: String,
  skinColor: String,
  facialHair: String,
});

module.exports = mongoose.model("Badge", Badge);
