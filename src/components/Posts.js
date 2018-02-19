import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import {fetchPosts} from '../api/blog';

class Posts extends Component {
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
      <section className="column main-column">
        {this.state.posts.map(post => <Post {...post} />)}
      </section>
    );
  }
}

Posts.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Posts;
