
const removeQuantity = (data,setItem) => {
  const localData = JSON.parse(localStorage.getItem('cart'))
  const index = localData.findIndex((item)=> item._id == data._id)
  if(localData[index].quantity>1){
    localData[index].quantity-=1
  }
  localStorage.setItem('cart',JSON.stringify(localData))
  setItem(localData)
}

export default removeQuantity
