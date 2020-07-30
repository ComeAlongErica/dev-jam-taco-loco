import React from 'react'
import PropTypes from 'prop-types'

const styles = { border: '1px solid', padding: '20px', margin: '20px', width: '100%' }

const OrderStatus = ({ status }) => {
  return (
    <div style={styles}>
      <p>Status of Order: {status.orderStatus}</p>
      <p>Order Will Be Ready At: {status.orderReadyTime}</p>
    </div>
  )
}

OrderStatus.propTypes = {
  status: PropTypes.object
}

export default OrderStatus
