import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Comment = props => <div>{props.text}</div>;

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  onClick() {
    this.props.onClick && this.props.onClick();
    this.setState({selected: !this.state.selected});
  }

  render() {
    const {title, body, author, comments = 0} = this.props;
    if (!title || !body) {
      return null;
    }

    return (
      <div
        className={`post ${this.state.selected && 'post--selected'}`}
        onClick={() => this.onClick()}>
        <figure className="post-image is-4by3">
          <img
            src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/1366/posts/26611/attachment/image-01.png"
            alt=""
          />
        </figure>

        <div className="post-body">
          <h1 className="post-title">{title}</h1>
          <p className="post-content">{body}</p>
          <footer class="post-info">
            <span>{author}</span>
            <span>{`${comments.length} comments`}</span>
          </footer>
        </div>
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
