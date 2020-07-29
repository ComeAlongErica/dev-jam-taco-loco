import React from 'react'
import PropTypes from 'prop-types'

import Item from './parts/Item'

const Category = ({ items }) => {
  
  const name = items[0].category

  return <div className='caterory'>
    <h2>{name}</h2>
    {items.map(item => <Item key={item.id} item={item}/>)}
  </div>
}

Category.propTypes = {
  items: PropTypes.array.isRequired
}

export default Category
