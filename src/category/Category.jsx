import React from 'react'
import PropTypes from 'prop-types'

import Item from './parts/Item'

const styles = { border: '1px solid', padding: '20px', margin: '20px' }

const Category = ({ items, addToCart }) => {
  const name = items[0].category

  return (
    <div style={styles}>
      <h2>{name}</h2>
      {items.map(item => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  )
}

Category.propTypes = {
  items: PropTypes.array.isRequired,
  addToCart: PropTypes.func
}

export default Category
