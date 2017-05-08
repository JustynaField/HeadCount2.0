import React from 'react';
import { CardsDisplay } from '../src/CardsDisplay';
import { shallow, mount } from 'enzyme';


describe('CardsDisplay', () => {

  it('CardsDisplay section has a class of card-container', () => {
    const data = [{location: 'denver', data: ''}, {location: 'academy', data: ''}, {location: 'akron', data: ''}]
    const wrapper = shallow(<CardsDisplay cards={data} selectedCards={[]} onClick={() => {}}/>);

    expect(wrapper.find('.card-container')).toHaveLength(1);
  })

  it('CardsDisplay section has a class of card-container', () => {
    const data = [{location: 'denver', data: ''}, {location: 'academy', data: ''}, {location: 'akron', data: ''}]
    const wrapper = shallow(<CardsDisplay cards={data} selectedCards={data} onClick={() => {}}/>);

    expect(wrapper.find('.selected')).toHaveLength(3);
  })


})
