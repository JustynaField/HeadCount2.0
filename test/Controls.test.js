import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Controls } from '../src/Controls';


describe ('Controls', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Controls />, div);
  });

  it('should have an input field', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('input').length).toEqual(1);
  });

  it('input field should have a class of input-field', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('input').hasClass('input-field')).toEqual(true);
  })

  it('has a button with a class of clear-button', () => {
    const wrapper = shallow(<Controls />);

    expect(wrapper.find('button').hasClass('clear-button')).toEqual(true);
  })

  it.skip('fires an onChange event on user input which should update the input field', () => {
  const wrapper = mount(<Controls />)
  const input = wrapper.find('input');

  input.simulate('change', {target: {value: 'Colorado'} });

  expect(input.node.value).toEqual('Colorado');
});


})
