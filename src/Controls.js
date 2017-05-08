import React from 'react';
import PropTypes from 'prop-types'

export const Controls = ({ onChange, resetComparison }) => {

    return(
      <section className='controls-container'>
        <input className='input-field'
                type='text'
                placeholder='Filter by district'
                onChange={(event) => onChange(event.target.value)} />
        <input  className="clear-button"
                type='submit'
                value='CLEAR COMPARISON'
                onClick={ () => resetComparison() } />
      </section>
    )
}

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  resetComparison: PropTypes.func.isRequired
}
