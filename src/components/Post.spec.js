import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Post from './Post';

describe('Post', () => {
  describe('when it is empty', () => {
    // given
    const props = {};

    it('renders nothing', () => {
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

  describe('when it has commentaries', () => {
    it('renders a commentary content', () => {
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
});
