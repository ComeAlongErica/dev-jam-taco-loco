import React, { useEffect } from 'react'
import { getMenu, postOrder } from './utilis'

function App () {
  useEffect(() => {
    getMenu().then(data => console.log(data))
    postOrder().then(data => console.log(data))
  }, [])

  return <div className='App'>Word.</div>
}

export default App
