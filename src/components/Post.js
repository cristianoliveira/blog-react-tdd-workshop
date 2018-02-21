import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Post.css';

import PostComments from './PostComments';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  onClick() {
    this.setState({selected: !this.state.selected});
    this.props.onClick && this.props.onClick();
    setTimeout(() => this.setState({selected: false}), 2000);
  }

  formatComment(body) {
    return {
      body,
      postId: this.props.id
    };
  }

  onCommentFormSubmit(event) {
    const { onCommentFormSubmit } = this.props;

    event.preventDefault();
    const form = event.currentTarget;
    const textarea = form.querySelector('#text');
    const comment = textarea.value;

    form.reset()
    onCommentFormSubmit(this.formatComment(comment));
  }

  onFocus() {
    this.setState({selected: !this.state.selected});
    setTimeout(() => this.setState({selected: false}), 2000);
  }

  render() {
    const { title, body, author, image, comments=[]} = this.props;
    if (!title || !body) {
      return null;
    }

    return (
      <div
        className={`post ${this.state.selected && 'post--selected'}`}
        onClick={() => this.onClick()}>
        <figure className="post-image is-4by3">
          <img src={image} alt="" />
        </figure>

        <div className="post-body">
          <h1 className="post-title">{title}</h1>
          <p className="post-content">{body}</p>
          <footer className="post-info">
            <span>{author}</span>
            <span>{`${comments.length} comments`}</span>
          </footer>

          <PostComments comments={comments}/>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onCommentFormSubmit: PropTypes.func,
  comments: PropTypes.array,
};

Post.defaultProps = {
  selected: false,
  onClick: () => {},
  onCommentFormSubmit: (txt) => console.log(txt),
  image: './images/default.jpg',
  comments: [],
};

export default Post;
