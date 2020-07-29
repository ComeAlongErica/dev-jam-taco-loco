let server = 'https://virtserver.swaggerhub.com/Detroit_Labs/Taco_Truck/1.0.0/'

const getMenu = () => {
  const url = server + 'menu'
  return window.fetch(url)
  .then(res => res.json())
}

const postOrder = orderData => {
  const url = server + 'order'
  return window.fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .catch(error => console.log('error: ', error))
}

export { getMenu, postOrder }