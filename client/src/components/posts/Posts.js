import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts, getPostWithTag } from '../../actions/post';

const Posts = ({ getPosts, setTitle, post: { posts } }) => {
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    getPosts();
    setTitle('Posts'); // update the title when the component is mounted
  }, [getPosts]);

  const toggleButton = async (event) => {
    //Basically here we reset it if pressed twice in a row or set it to what it is supposed to be 
    if(event.target.value == selectedButton){
      setSelectedButton("");
    }else{
      setSelectedButton(event.target.value);
    }
    //getPostWithTag(selectedButton);
    //const temp = await getPosts(selectedButton)
    //setFilteredPosts(temp);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <PostForm />
      <label className={selectedButton === "Carpooling" ? "selected" : ""}>
        <input
          type="radio"
          name="buttonGroup"
          value="Carpooling"
          onClick={toggleButton}
        />
        Carpooling
      </label>
      <label className={selectedButton === "Meeting" ? "selected" : ""}>
        <input
          type="radio"
          name="buttonGroup"
          value="Meeting"
          onClick={toggleButton}
        />
        Meeting
      </label>
      <label className={selectedButton === "Jobs" ? "selected" : ""}>
        <input
          type="radio"
          name="buttonGroup"
          value="Jobs"
          onClick={toggleButton}
        />
        Jobs
      </label>
      <label className={selectedButton === "Lease Transfer" ? "selected" : ""}>
        <input
          type="radio"
          name="buttonGroup"
          value="Lease Transfer"
          onClick={toggleButton}
        />
        Lease Transfer
      </label>
      <label className={selectedButton === "Other Help" ? "selected" : ""}>
        <input
          type="radio"
          name="buttonGroup"
          value="Other Help"
          onClick={toggleButton}
        />
        Other Help
      </label>
      <div className="posts" style={{marginTop:"10px"}}>
        { 
        //I did post.tag because we had some posts with no tags prior to implementing tags
        posts.filter((post)=> selectedButton ? (post.tag && post.tag.includes(selectedButton)):true).map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});


export default connect(mapStateToProps, { getPosts })(Posts);
