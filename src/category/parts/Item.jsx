import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ item }) => {
  return <div className='item'>
    <h3>{item.name}</h3>
    <p>Price: {item.price}</p>
    {item.discount_threshold && item.discount_percent && <p>Promo: buy {item.discount_threshold} get {item.discount_percent}% off!</p>}
  </div>
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item
