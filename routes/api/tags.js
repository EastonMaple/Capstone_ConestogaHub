const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Tag = require('../../models/Tag');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/tags
// @desc     Create a tag
// @access   Private
router.post(
  '/',
  auth,
  check('name', 'Name is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
      let tag = await Tag.findOne({ name });

      if (tag) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Tag already exists' }] });
      }

      tag = new Tag({
        name: name,
      });

      await tag.save();

      res.json(tag);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/tags
// @desc     Get all tags
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const tags = await Tag.find().sort({ date: -1 });
    res.json(tags);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/tags/associate/:id/:post_id
// @desc     Associate a post
// @access   Private
router.post(
  '/associate/:id/:post_id',
  auth,
  checkObjectId('id'),
  async (req, res) => {
    try {
      const tag = await Tag.findById(req.params.id);

      const assoPost = {
        post: req.params.post_id,
      };

      tag.posts.unshift(assoPost);

      await tag.save();

      res.json(tag.posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;