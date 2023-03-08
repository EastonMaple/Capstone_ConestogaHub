const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  creater:{
    id:{ 
      type: Schema.Types.ObjectId
    },
    name: {
      type: String
    },
    avatar: {
      type: String
    }
  }
 ,
  likes: [
    { 
      user:{
        id:{ 
          type: Schema.Types.ObjectId
        },
        name: {
          type: String
        },
        avatar: {
          type: String
        }
      }
    }
  ],
  comments: [
    {
      id:{ 
        type: Schema.Types.ObjectId
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('wiki', PostSchema);