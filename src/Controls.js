import React from 'react';
import PropTypes from 'prop-types'

export const Controls = ({ onChange, resetComparison }) => {

    return(
      <section className='controls-container'>
        <input className='input-field'
                type='text'
                placeholder='Filter by district'
                onChange={(event) => onChange(event.target.value)} />
        <button className="clear-button"
                type='submit'
                onClick={ () => resetComparison() }>CLEAR COMPARISON</button>
      </section>
    )
}

Controls.propTypes = {
  onChange: PropTypes.func,
  resetComparison: PropTypes.func
}
