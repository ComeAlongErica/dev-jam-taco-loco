const server =
  'https://virtserver.swaggerhub.com/Detroit_Labs/Taco_Truck/1.0.0/'

const sortMenu = menu => {
  let sortedMenu = { categories: [] }

  menu.forEach(item => {
    const category = item.category

    // if category doesn't exist yet, create it, then push to array
    if (!sortedMenu[category]) {
      sortedMenu.categories.push(category)
      sortedMenu[category] = []
    }
    sortedMenu[category].push(item)
  })

  return sortedMenu
}

const getMenu = () => {
  const url = server + 'menu'
  return window
    .fetch(url)
    .then(res => res.json().then(menuData => sortMenu(menuData)))
}

const postOrder = orderData => {
  const url = server + 'order'
  return window
    .fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    .catch(error => console.log('error: ', error))
}

const getTotal = cart => {
  let total = 0
  cart.forEach(item => {
    const totalPrice = item.price * item.quantity
    const isDiscount = item.quantity >= item.discount_threshold
    const discountPrice = isDiscount
      ? (item.discount_percent / 100) * totalPrice
      : 0
    total += totalPrice - discountPrice
  })
  return total
}

export { getMenu, postOrder, getTotal }
