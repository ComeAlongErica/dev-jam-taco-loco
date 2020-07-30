import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  borderBottom: '1px solid grey',
  padding: '10px',
}

const CartItem = ({ item }) => {
  return (
      <div style={styles}>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
      </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
