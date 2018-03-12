import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({body}) => <div className="post-comment">{body}</div>;

const Form = ({onSubmit, onFocus}) => (
  <form
    className="post-form-comment"
    onSubmit={onCommentFormSubmit}>
    <label>New commentary</label>
    <textarea
      onFocus={onFocus}
      name="text"
      id="text"
      rows="8"
      cols="40"
    />
    <button>Send</button>
  </form>
);


function PostComments({comments, onCommentFormSubmit, onFocus}) {
  const commentSection = comments.length ? (
    <div className="post-comments">
      {comments.map((comment, i) => <Comment key={i} {...comment} />)}
    </div>
     ) : null;

  return (
    <div>
      { commentSection }
      <Form onSubmit={onCommentFormSubmit} onFocus={onFocus}/>
    </div>
  );
}

PostComments.defaultProps = {};

PostComments.propTypes = {};

export default PostComments;
