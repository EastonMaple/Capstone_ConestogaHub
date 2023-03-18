const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  posts: [
    {
      post: {
        type: Schema.Types.ObjectId
      }
    }
  ]
});

module.exports = mongoose.model('tag', TagSchema);