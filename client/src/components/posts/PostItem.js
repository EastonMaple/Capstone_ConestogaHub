import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, titleText, bodyText, tag, name, avatar, user, likes, comments, date }
}) => (
  <div className="post bg-white p-1 my-1">
    {/* style={{display:"flex",justifyContent:"center", flexFlow:"column"}} */}
    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" style={{ margin:"auto"}} />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
    <button className="btn btn-secondary" style={{marginBottom:"10px"}} disabled>{tag ?? "No tag"}</button>
      <p className="my-1" style={{fontWeight:"bold",fontSize:"20px"}}>{titleText}</p>
      <p className="my-1">{bodyText}</p>
      <p className="post-date">Posted on {formatDate(date)}</p>

      <button
        onClick={() => addLike(_id)}
        type="button"
        className="btn btn-light"
      >
        <i className="fas fa-thumbs-up" />{' '}
        <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
      </button>
      <button
        onClick={() => removeLike(_id)}
        type="button"
        className="btn btn-light"
      >
        <i className="fas fa-thumbs-down" />
      </button>
      <Link to={`/posts/${_id}`} className="btn btn-primary">
        Discussion{' '}
        {comments.length > 0 && (
          <span className="comment-count">{comments.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deletePost(_id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
