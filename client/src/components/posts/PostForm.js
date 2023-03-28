import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  //Body text
  const [bodyText, setBodyText] = useState('');
  //Title text
  const [titleText, setTitleText] = useState('');
  //Tag 
  const [tag, setTag] = useState('Carpooling');


  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ titleText, bodyText, tag });
          setBodyText('');
          setTitleText('');
          setTag('');
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around"}}>
          <textarea className="my-1" style={{ marginRight: "40px" }}
            name='titleText'
            cols='30'
            rows='1'
            placeholder='Create a title'
            value={titleText}
            onChange={e => setTitleText(e.target.value)}
            required
          />
          <select className="my-1" aria-label="Default select example" value={tag} onChange={e => setTag(e.target.value)}>
            <option disabled defaultValue>Post Tag</option>
            <option value="Carpooling">Carpooling</option>
            <option value="Meeting">Meeting</option>
            <option value="Jobs">Jobs</option>
            <option value="Lease Transfers">Lease Transfers</option>
            <option value="Other Help">Other Help</option>
          </select>
        </div>

        <textarea
          name='bodyText'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={bodyText}
          onChange={e => setBodyText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
        
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
