const express = require('express');
 
let router = express.Router();
 
const { check, validationResult } = require('express-validator');
//import middleware
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
router.use(auth);
router.use(checkObjectId);

//import models
const Wiki = require('../../models/Wiki');
const User = require('../../models/User');

//creat wiki
router.post('/createWiki',
 check('title', 'Title is required').notEmpty(),
 check('text', 'Content is required').notEmpty(),
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(req.user.id).select('-password');

    const newWiki = new Wiki({
      title:req.body.title,
      text: req.body.text,
      creater: {
        id: req.user.id,
        name:user.name,
        avatar:user.avatar
      },
      date: Date.now
    });

    const wiki = await newWiki.save();

    res.json(wiki);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 

//output current router
module.exports = router;