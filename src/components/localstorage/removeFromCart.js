const removeFromCart = (data,setItem)=>{
    let localst= JSON.parse(localStorage.getItem('cart'))
    const updateData = localst.filter((item)=>item.id != data?.id)
    localStorage.setItem('cart',JSON.stringify(updateData))
    setItem(updateData)
}
export default removeFromCart;