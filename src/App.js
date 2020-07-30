import React, { useEffect, useState } from 'react'

import Category from './category/Category'
import Cart from './cart/Cart'
import { getMenu, postOrder, getTotal } from './utilis'

const containerStyles = { display: 'flex', flexWrap: 'wrap' }
const catContainerStyles = { width: '40%', flexGrow: 1 }

function App () {
  const [menu, setMenuItems] = useState({})
  const [cart, setCart] = useState([])
  const [orderStatus, setOrderStatus] = useState({})

  useEffect(() => {
    getMenu().then(menu => setMenuItems(menu))
  }, [])

  const addToCart = item => {
    let cartClone = [...cart]
    const itemIndex = cartClone.findIndex(
      cartItem => cartItem.name === item.name
    )
    if (itemIndex === -1) {
      item.quantity = 1
      cartClone.push(item)
    } else {
      cartClone[itemIndex].quantity++
    }
    setCart(cartClone)
  }

  const submitOrder = userName => {
    let body = {
      customerName: userName,
      totalPrice: getTotal(cart),
      orderItems: cart
    }
    postOrder(body).then(resp => setOrderStatus(resp))
  }

  const doCatsExist = menu.categories && menu.categories.length

  console.log(orderStatus)
  return (
    <div style={containerStyles}>
      <div style={catContainerStyles}>
        {!doCatsExist && <p>Please wait...</p>}
        {doCatsExist &&
          menu.categories.map((data, idx) => (
            <Category key={idx} items={menu[data]} addToCart={addToCart} />
          ))}
      </div>
      <Cart items={cart} submitOrder={submitOrder} />
    </div>
  )
}

export default App
