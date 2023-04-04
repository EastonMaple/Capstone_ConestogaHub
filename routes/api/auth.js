const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const emailSend = require('../../middleware/emailValidate/emailSender');
const codeValidating = require('../../middleware/emailValidate/codeValidating');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
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


// @route PUT api/auth/update
// update user
router.put(
  '/update',
    auth,
  async (req, res) => {
    try {
      const user = await User.updateOne({ _id: req.user.id }, { $set: { emailVerified: true } });
      res.json({ msg: 'updated' });
    }catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST api/auth/validate-email
// @desc    validate email
// @access  Public
router.post('/validate-email', auth, async (req, res) => {
  try {
    const { name, email } = await User.findById(req.user.id).select(
      '-password'
    );

    const { validationCode } = req.body;
    if (!validationCode) {
      emailSend(name, email);
      return res.status(400).json({
        errors: [
          {
            msg: 'A validation code has been sent to your email. Please check your mailbox!',
          },
        ],
      });
    }

    var passValidate = await codeValidating(name, email, validationCode);

    if (!passValidate) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'ValidationCode not match' }] });
    }

    res.json({ msg: 'ValidationCode match' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // see if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // compare the user input password with the encrypted password in db
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
