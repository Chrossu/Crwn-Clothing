export const addItemToCart = (stateCarts, item) => {
  const cartExists = stateCarts.find(cart => cart.id === item.id);

  if (cartExists) {
    return stateCarts.map(cart =>
      cart.id === item.id ? 
      {...cart, quantity: cart.quantity + 1}
      :
      cart
      );
  }

  return [...stateCarts, {...item, quantity: 1}];
}