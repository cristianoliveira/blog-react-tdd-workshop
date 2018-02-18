import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Post from './Post';

describe('Post', () => {
  describe('when is empty', () => {
    it('renders nothing', () => {
      // given
      const props = {};

      // when
      const wrapper = shallow(<Post {...props} />);

      //then
      expect(wrapper.type()).toBeNull();
    });

    it('renders nothing without title', () => {
      // given
      const props = {content: 'Foo'};

      // when
      const wrapper = shallow(<Post {...props} />);

      //then
      expect(wrapper.type()).toBeNull();
    });

    it('renders nothing without content', () => {
      // given
      const props = {title: 'Foo'};

      // when
      const wrapper = shallow(<Post {...props} />);

      //then
      expect(wrapper.type()).toBeNull();
    });
  });

  describe('when it has post content', () => {
    it('renders title and post content', () => {
      // given
      const props = {
        title: 'Foobar',
        content: 'Some awesome text',
      };

      // when
      const wrapper = shallow(<Post {...props} />);

      // then
      expect(wrapper.find('h1')).toHaveLength(1);
      expect(wrapper.find('p')).toHaveLength(1);
    });
  });

  describe('displaying commentaries', () => {
    it('renders no comment', () => {
      // given
      const props = {
        title: 'Foobar',
        content: 'Some awesome text',
        comments: [],
      };

      // when
      const wrapper = shallow(<Post {...props} />);

      // then
      expect(wrapper.find('Comment')).toHaveLength(0);
    });

    it('renders a comment', () => {
      // given
      const props = {
        title: 'Foobar',
        content: 'Some awesome text',
        comments: [{text: 'Awesome'}],
      };

      // when
      const wrapper = shallow(<Post {...props} />);

      // then
      expect(wrapper.find('Comment')).toHaveLength(1);
    });

    it('renders more than one commentary', () => {
      // given
      const props = {
        title: 'Foobar',
        content: 'Some awesome text',
        comments: [{text: 'Awesome'}, {text: 'Other'}],
      };

      // when
      const wrapper = shallow(<Post {...props} />);

      // then
      expect(wrapper.find('Comment')).toHaveLength(2);
    });
  });

  describe('when interacting with post', () => {
    it('responds to clicks', () => {
      // given
      const props = {
        title: 'Foobar',
        content: 'Some awesome text',
        onClick: jest.fn()
      };

      // when
      const wrapper = shallow(<Post {...props} />);
      wrapper.simulate('click');

      // then
      expect(props.onClick).toHaveBeenCalled();
    });

    it('appears as selected', () => {
      // given
      const props = {
        title: 'Foobar',
        content: 'Some awesome text',
        onClick: jest.fn()
      };

      // when
      const wrapper = shallow(<Post {...props} />);
      wrapper.simulate('click');

      // then
      expect(wrapper.hasClass('post--selected')).toEqual(true);
    });
  });
});
