import React from 'react'
import PropTypes from 'prop-types'

import AddToCart from './AddToCart'

const itemStyles = {
  borderBottom: '1px solid grey',
  padding: '10px',
  display: 'flex'
}

const infoStyles = {
  width: '75%'
}

const Item = ({ item, addToCart }) => {
  return (
    <div className='item' style={itemStyles}>
      <div style={infoStyles}>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
        {item.discount_threshold && item.discount_percent && (
          <p>
            Promo: buy {item.discount_threshold} get {item.discount_percent}%
            off!
          </p>
        )}
      </div>
      <AddToCart handleClick={() => addToCart(item)} />
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func
}

export default Item
