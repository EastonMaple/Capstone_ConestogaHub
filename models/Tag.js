const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('tag', TagSchema);