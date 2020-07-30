import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ handleClick }) => {
  return (
      <button onClick={handleClick} >Add To Order</button>
  )
}

Item.propTypes = {
  handleClick: PropTypes.func
}

export default Item
