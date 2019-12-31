export const addItemToCart = (stateCarts, item) => {
  const cartExists = stateCarts.find(cart => cart.id === item.id);

  if (cartExists) {
    return stateCarts.map(cart =>
      cart.id === item.id ?
        { ...cart, quantity: cart.quantity + 1 }
        :
        cart
    );
  }

  return [...stateCarts, { ...item, quantity: 1 }];
}

export const removeItemQuantity = (cartItems, itemIdToRemove) => {
  const findCartItem = cartItems.find(item => item.id === itemIdToRemove);

  if (findCartItem.quantity === 1) {
    return [...cartItems];
  }

  return cartItems.map(item =>
    item.id === itemIdToRemove ?
      { ...item, quantity: item.quantity - 1 }
      :
      item
  )
}