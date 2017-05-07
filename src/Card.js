import React from 'react'
import PropTypes from 'prop-types'

const Card = ({school, data}) => {
  return(
  <div className='data-container'>
    {Object.keys(data[school].data).map((datapiece, index) => {
      if(data[school].data[datapiece] > 0.5) {
        return(
            <p className='above' key={index}>{datapiece}: {data[school].data[datapiece]}</p>
        )
      }
      else {
        return(
            <p className='below' key={index}>{datapiece}: {data[school].data[datapiece]}</p>
        )
      }
      })
    }
    </div>
  )
}

Card.propTypes = {
  school: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Card
