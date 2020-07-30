import React, { useEffect, useState } from 'react'

import Category from './category/Category'
import Cart from './cart/Cart'
import { getMenu, postOrder } from './utilis'

const constainerStyles = { display: 'flex' }
const catContainerStyles = { flexGrow: 1 }

function App () {
  const [menu, setMenuItems] = useState({})
  const [cart, setCart] = useState([])
  const [orderStatus, setOrderStatus] = useState({})

  useEffect(() => {
    getMenu().then(menu => setMenuItems(menu))
    // postOrder().then(data => setMenuItems(data))
  }, [])

  const addToCart = item => {
    setCart([...cart, item])
  }
  const doCatsExist = menu.categories && menu.categories.length
  return (
    <div style={constainerStyles}>
      <div style={catContainerStyles}>
        {!doCatsExist && <p>Please wait...</p>}
        {doCatsExist &&
          menu.categories.map((data, idx) => (
            <Category key={idx} items={menu[data]} addToCart={addToCart} />
          ))}
      </div>
      <Cart items={cart} />
    </div>
  )
}

export default App
