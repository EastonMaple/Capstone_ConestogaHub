const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route   GET auth
// @desc    find user with auth token
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
