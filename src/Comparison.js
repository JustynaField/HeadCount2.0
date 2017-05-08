import React from 'react';
import PropTypes from 'prop-types'

export const Comparison = ({ selectedCards, compareCards, resetComparison }) => {
  const showComparison = () => {
    if (selectedCards.length === 2) {
      let district1 = selectedCards[0].location.toUpperCase();
      let district2 = selectedCards[1].location.toUpperCase();
      let averageData = compareCards(district1, district2);
      return (
        <div className='selected comparison'>
          <p className='district-name'>
            {district1}: {averageData[district1]}
          </p>
          <p className='district-name'>
            {district2}: {averageData[district2]}
          </p>
          <p className='comparison-data'>
            COMPARED: {averageData.compared}
          </p>
        </div>
      )
    }
  }

  if(selectedCards.length) {
    return (
      <div className='comparison-container'>
        {selectedCards.map( (card, index) => {
          return (
            <div className={index === 0 ? 'selected first' : 'selected second'} key={index}>
              <p className='card-title'>
                {card.location}
              </p>
              <div className='data-container'>
                {Object.keys(card.data).map((key, index) => {
                  return(
                    <p key={index}
                      className={card.data[key] > 0.5 ? 'above district-data' : 'below district-data'}>
                      {key}: {card.data[key]}
                    </p>
                  )
                })}
              </div>
            </div>
          )
        })}
        {showComparison()}
      </div>
    )
  } else {
    return (
      <div />
    )
  }
}

Comparison.propTypes = {
  selectedCards: PropTypes.array,
  compareCards: PropTypes.func,
  resetComparison: PropTypes.func
}
