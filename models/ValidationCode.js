const mongoose = require('mongoose');

const ValidationCodeSchema = new mongoose.Schema({
    createdAt: {
    type: Date,
    default: Date.now
    },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
  code: {
    type: String
  }
});

ValidationCodeSchema.index( { "createdAt": 1 }, { expireAfterSeconds: 300 } )

module.exports = ValidationCode = mongoose.model('ValidationCode', ValidationCodeSchema);