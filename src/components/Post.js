import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Post.css';

class Post extends Component {
  render() {
    if (!this.props.title) {
      return null;
    }

    return (
      <div
        className={`post ${this.props.selected && 'post--selected'}`}
        onClick={this.props.onClick}>
        <h1>{this.props.title}</h1>
        <div>{this.props.content}</div>
        {this.props.comments.map(comment => <Comment {...comment} />)}
      </div>
    );
  }
}

Post.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

Post.defaultProps = {
  selected: false,
  onClick: () => {},
};

export default Post;
