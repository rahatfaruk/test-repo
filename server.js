// insert new medicine into mongodb
app.post('/add-medicine-to-cart', async (req, res) => {
  const newMedicine = req.body 
  // insert medicine into mongodb
  const insertedData = await cartsCollection.insertOne(newMedicine)
  res.send(insertedData)
})

// increament cart item by 1
app.patch('/inc-cart-item-quantity', async (req, res) => {
  const id = req.query.id
  const filter = { _id: new ObjectId(`${id}`) }
  // increment count in mongodb. $inc is a mongodb operator 
  const updateDoc = { $inc: {count: 1} }
  const result = await cartsCollection.updateOne(filter, updateDoc)
  res.send(result)
})

// decreament (minus) cart item by 1
app.patch('/dec-cart-item-quantity', async (req, res) => {
  const id = req.query.id
  const filter = { _id: new ObjectId(`${id}`) }
  // decrement count in mongodb. $inc is a mongodb operator 
  const updateDoc = { $inc: {count: -1} } // count: -1 (minus 1)
  const result = await cartsCollection.updateOne(filter, updateDoc)
  res.send(result)
})