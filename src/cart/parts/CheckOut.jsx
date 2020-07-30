import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Item = ({ submitOrder }) => {
  const [userName, setUserName] = useState('')
  const [error, setError] = useState(false)

  const handleChange = e => {
    setUserName(e.target.value)
  }

  const handleClick = e => {
    e.preventDefault()
    if (userName.length) {
      submitOrder(userName)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <form>
        <label>
          Name:
          <input type='text' value={userName} onChange={handleChange} />
        </label>
        <button onClick={handleClick}>Check Out</button>
      </form>
      {error && <p style={{ color: 'red' }}>Add name to order to continue</p>}
    </>
  )
}

Item.propTypes = {
  submitOrder: PropTypes.func
}

export default Item
