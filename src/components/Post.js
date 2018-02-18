import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Comment = props => <div>{props.text}</div>;

class Post extends Component {
  render() {
    const {title, content, comments} = this.props;

    if (!title || !content) {
      return null;
    }

    return (
      <div
        className={`post ${this.props.selected && 'post--selected'}`}
        onClick={this.props.onClick}>
        <h1>{title}</h1>
        <p>{content}</p>
        {comments.map((comment, i) => <Comment {...comment} key={i} />)}
      </div>
    );
  }
}

Post.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  comments: PropTypes.array,
};

Post.defaultProps = {
  selected: false,
  onClick: () => {},
  comments: [],
};

export default Post;
