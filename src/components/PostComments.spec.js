import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow, mount} from 'enzyme';

import PostComments from './PostComments';

describe('Post Comment', () => {
  it('renders nothing', () => {
    const props = {comments: []};

    const component = shallow(<PostComments {...props} />);

    expect(component.type()).toEqual(null);
  });

  it('renders a comment', () => {
    const props = {
      comments: [{body: 'Awesome'}],
      onCommentFormSubmit: jest.fn(),
      onFocus: jest.fn(),
    };

    const component = shallow(<PostComments {...props} />);

    expect(component.find('Comment')).toHaveLength(1);
  });

  it('renders more than one comment', () => {
    const props = {
      comments: [{body: 'Awesome'}, {body: 'Awesome'}],
      onCommentFormSubmit: jest.fn(),
      onFocus: jest.fn(),
    };

    const component = shallow(<PostComments {...props} />);

    expect(component.find('Comment').length).toBeGreaterThan(1);
  });

  it('renders form', () => {
    const props = {
      comments: [{body: 'Awesome'}, {body: 'Worse'}],
      onCommentFormSubmit: jest.fn(),
      onFocus: jest.fn(),
    };

    const component = shallow(<PostComments {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
