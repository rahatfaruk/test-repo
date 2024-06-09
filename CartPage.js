// ## 2. CartPage.jsx

// increment 
const handleIncrementQuantity = (cartItemId) => {
  // send req for increament
  axios.patch(`/inc-cart-item-quantity?id=${cartItemId}`)
  .then(() => console.log('item added'))
}

// decrement
const handleDecrementQuantity = (cartItemId) => {
  // send req for increament
  axios.patch(`/dec-cart-item-quantity?id=${cartItemId}`)
  .then(() => console.log('item added'))
}

return (
  // show full table. I have just showed table inc/dec box 
  <tr>
    <td>
      <button onClick={() => handleDecrementQuantity(cart._id)}>-</button>
      <span>{item.count}</span>
      <button onClick={() => handleIncrementQuantity(cart._id)}>+</button>
    </td>
  </tr>
)