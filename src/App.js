import React, { useEffect, useState } from 'react'

import Category from './category/Category'
import { getMenu, postOrder } from './utilis'

function App () {
  const [menu, setMenuItems] = useState({})
  const [orderStatus, setOrderStatus] = useState({})

  useEffect(() => {
    getMenu().then(menu => setMenuItems(menu))
  }, [])

  const addToCart = item => {
    console.log(item)
    postOrder().then(data => setMenuItems(data))
  }

  const doCatsExist = menu.categories && menu.categories.length
  return (
    <div className='App'>
      {!doCatsExist && <p>Please wait...</p>}
      {doCatsExist &&
        menu.categories.map((data, idx) => (
          <Category key={idx} items={menu[data]} addToCart={addToCart} />
        ))}
    </div>
  )
}

export default App
