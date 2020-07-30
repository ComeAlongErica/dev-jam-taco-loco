import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  borderBottom: '1px solid grey',
  padding: '10px',
}

const CartItem = ({ item }) => {
  const totalPrice = (item.price * item.quantity)
  const isDiscount = item.quantity >= item.discount_threshold
  const discountPrice = isDiscount ? (item.discount_percent / 100) * totalPrice : 0
  return (
      <div style={styles}>
        <h3>{item.name}</h3>
        <p>Price: ${(totalPrice - discountPrice).toFixed(2)}</p>
        <p>quantity: {item.quantity}</p>
        {isDiscount&& <p>Discount of {item.discount_percent}% is applied.</p>}
      </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem
