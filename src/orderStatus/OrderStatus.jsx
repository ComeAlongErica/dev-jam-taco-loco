import React from 'react'
import PropTypes from 'prop-types'

const styles = { border: '1px solid', padding: '20px', margin: '20px', width: '100%' }

const OrderStatus = ({ status }) => {
  return (
    <div style={styles}>
      <h2>Status of Order: {status.orderStatus}</h2>
      <h2>Order Will Be Ready At: {status.orderReadyTime}</h2>
    </div>
  )
}

OrderStatus.propTypes = {
  status: PropTypes.object
}

export default OrderStatus
