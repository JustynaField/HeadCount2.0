import React from 'react';
import { Comparison } from '../src/Comparison';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

describe('Comparison', () => {

  it.skip('showComparison div has a class of selected', () => {
    const wrapper = mount(<Comparison/>);

    expect(wrapper.find('div').hasClass('selected')).toEqual(true);
  })


})
