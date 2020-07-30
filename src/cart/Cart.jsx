import React from 'react'
import PropTypes from 'prop-types'

import CartItem from './parts/CartItem'

const styles = { border: '1px solid', padding: '20px', margin: '20px' }

const Cart = ({ items }) => {
  const isEmpty = items.length === 0 
  console.log(isEmpty)
  return (
    <div style={styles}>
      <h2>Your Cart</h2>
      {isEmpty && <p>Add something to your cart.</p>}
      {!isEmpty && items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array.isRequired
}

export default Cart
