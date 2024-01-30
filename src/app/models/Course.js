const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose_delete = require('mongoose-delete');

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
// Add plugin
Course.plugin(mongoose_delete, {overrideMethods: 'all' });
Course.plugin(mongoose_delete, { overrideMethods: true });
Course.plugin(mongoose_delete, { deletedAt : true, deletedBy : true });
module.exports = mongoose.model('Course', Course);
