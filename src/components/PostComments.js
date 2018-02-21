import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({body}) => <div className="post-comment">{body}</div>;

function PostComments({comments, onCommentFormSubmit, onFocus}) {
  if (!comments.length) {
    return null;
  }

  return (
    <div>
      <div className="post-comments">
        {comments.map((comment, i) => <Comment key={i} {...comment} />)}
      </div>
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
    </div>
  );
}

PostComments.defaultProps = {};

PostComments.propTypes = {};

export default PostComments;
