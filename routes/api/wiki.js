const express = require('express');
 
let router = express.Router();
 
const { check, validationResult } = require('express-validator');
//import middleware
const auth = require('../../middleware/auth');
const paramValidate = require('../../middleware/ParamValidate');
router.use(auth);


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
      }
    });

    const wiki = await newWiki.save();

    res.json(wiki);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/wikis
// @desc     Get all wikis
// @access   Private
router.get('/', async (req, res) => {
    try {
      const wikis = await Wiki.find().sort({ date: -1 });
      res.json(wikis);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  // @route    GET api/wikis/:id
// @desc     Get wiki by ID
// @access   Private
router.get('/:id', paramValidate,async (req, res) => {
    try {
      const wiki = await Wiki.findById(req.params.id);
  
      if (!wiki) {
        return res.status(404).json({ msg: 'Wiki not found' });
      }
  
      res.json(wiki);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  // @route    DELETE api/posts/:id
  // @desc     Delete a post
  // @access   Private
  router.delete('/:id',paramValidate,async (req, res) => {
    try {
      const wiki = await Wiki.findById(req.params.id);
  
      if (!wiki) {
        return res.status(404).json({ msg: 'Wiki not found' });
      }
  
      // Check user
      if (wiki.user.id.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await wiki.remove();
  
      res.json({ msg: 'Wiki removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

//like wiki
router.post('/like/:id',paramValidate,
async (req, res) => {
    try {
        const wiki = await Wiki.findById(req.params.id);
        const user = await User.findById(req.user.id).select('-password');
        // Check if the post has already been liked
        if (wiki.likes.some((like) => like.user.id.toString() === req.user.id)) {
          return res.status(400).json({ msg: 'Post already liked' });
        }
    
        wiki.likes.unshift({ 
            user: {
                id:req.user.id,
                name:user.name,
                avatar:user.avatar
            }
        });
        await wiki.save();
    
        return res.json(wiki.likes);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});
 

//unlike wiki
router.post('/unlike/:id',paramValidate,
async (req, res) => {
    try {
        const wiki = await Wiki.findById(req.params.id);
    
        // Check if the wiki has not yet been liked
        if (!wiki.likes.some((like) => like.user.id.toString() === req.user.id)) {
          return res.status(400).json({ msg: 'Post has not yet been liked' });
        }
    
        // remove the like
        wiki.likes = wiki.likes.filter(
          ({ user }) => user.id.toString() !== req.user.id
        );
    
        await wiki.save();
    
        return res.json(wiki.likes);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

//comment wiki
router.post(
  '/comment/:id',paramValidate,
  check('text', 'Text is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const wiki = await Wiki.findById(req.params.id);

      const newComment = {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        text:req.body.text
      };

      wiki.comments.unshift(newComment);
      await wiki.save();
      res.json(wiki.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//output current router
module.exports = router;