import React from 'react';
import { Card } from './Card';
import PropTypes from 'prop-types'

export const CardsDisplay = ({ selectedCards, cards, onClick }) => {
  const checkIfSelected = (obj) => {
      let selectedClass = '';
      if (selectedCards.includes(obj)) {
        selectedClass = 'selected';
      } else {
        selectedClass = 'card';
      }
      return selectedClass;
    };

  return (
    <section className='card-container'>
      {Object.keys(cards).map((key, index) => {
        const selectedClass = checkIfSelected(cards[key]);
        const location = cards[key].location;
        return (
          <section  className='card selected'
                    key={index}
                    onClick={() => {onClick(location)}}>
            <p className='card-title'>{cards[key].location}</p>
            <Card school={key}
                  data={cards}/>
          </section>
        )
      })}
    </section>
  )
}

CardsDisplay.propTypes = {
  selectedCards: PropTypes.array,
  cards: PropTypes.object,
  onClick: PropTypes.func
}
