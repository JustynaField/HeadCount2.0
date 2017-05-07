import React from 'react';
import PropTypes from 'prop-types'

export const Controls = ({onChange}) => {

    return(
      <section className='controls-container'>
        <input className='input-field'
                type='text'
                placeholder='Search by district'
                onChange={(event) => onChange(event.target.value)}
          />
      </section>
    )
}

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
}
