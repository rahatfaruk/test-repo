// 1. SHOP PAGE: 
// Frontend :: clicking the select button will add the medicine to the cart.
const handleClickButton = (formData) => {
  const newMedicine = {
    // get these items from user form
    "name": "Bandages",
    "company": "Johnson & Johnson",
    "price_per_unit": 3.99,
    // initialize quantity as 1
    "quantity": 1
  }

  // post req newMedicine into database carts
  axios.post('/add-medicine-to-cart', newMedicine)
  .then(res => {
    alert('new medicine added')
  })
}