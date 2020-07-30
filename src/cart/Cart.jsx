import React from 'react'
import PropTypes from 'prop-types'

import CartItem from './parts/CartItem'
import CheckOut from './parts/CheckOut'

const styles = { border: '1px solid', padding: '20px', margin: '20px' }

const Cart = ({ items, submitOrder }) => {
  const isEmpty = items.length === 0 
  return (
    <div style={styles}>
      <h2>Your Cart</h2>
      {isEmpty && <p>Add something to your cart.</p>}
      {!isEmpty && items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <CheckOut submitOrder={submitOrder} />
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array,
  submitOrder: PropTypes.func
}

export default Cart
