import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import {fetchPosts, fetchComments} from '../api/blog';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetchPosts()
      .then(posts => this.setState({posts}))
      .then(fetchComments)
      .then(comments => this.setState({comments}));
  }

  onNewComment(comment) {
    const comments = [...this.state.comments, comment];
    this.setState({ comments });
  }

  render() {
    if (!this.state.comments) {
      return null;
    }

    const filterComment = post =>
      this.state.comments.filter(c => c.postId === post.id);

    const postsComments = this.state.posts.map(post => ({
      ...{post, comments: filterComment(post)},
    }));

    return (
      <section className="column main-column">
        {postsComments.map(({post, comments}) => (
          <Post {...post}
            comments={comments}
            onCommentFormSubmit={this.onNewComment.bind(this)} />
        ))}
      </section>
    );
  }
}

Posts.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Posts;
