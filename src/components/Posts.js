import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import {fetchPosts} from '../api/blog';

class Posts extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetchPosts().then(posts => this.setState({posts}));
  }

  render() {
    return (
    <div className="container">
      <h1>The awesome blog</h1>
      {this.state.posts.map(post => (<Post {...post} />)
      )}
    </div>
    )
  }
}

Posts.defaultProps = {};

Posts.propTypes = {};

export default Posts;
