import React, { useEffect, useState } from 'react'
import { getMenu, postOrder } from './utilis'

function App () {
  const [menu, setMenuItems] = useState({})
  useEffect(() => {
    getMenu().then(menu => setMenuItems(menu))
    postOrder().then(data => console.log(data))
  }, [])
  return <div className='App'>Word.</div>
}

export default App
