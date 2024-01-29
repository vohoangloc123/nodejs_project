const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255, required: true },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  videoID:{type: String, maxLength: 255, required: true},
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  level: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name', unique: true },
});
module.exports = mongoose.model('Course', Course);
