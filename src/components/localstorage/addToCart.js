const addToCart = (productData)=>{
    productData.quantity=1;
    let localData =localStorage.getItem('cart');
    
    if(localData==null)
    {
        let tempArr = [];
        tempArr.push(productData)
        localStorage.setItem('cart',JSON.stringify(tempArr))
    }
    else{

        
        let tempArr = JSON.parse(localStorage.getItem('cart'));
        let tempArray = tempArr.filter((item)=>item.id==productData.id)
        if (tempArray != 0 ){
            
            return;
        }
        tempArr.push(productData)
        localStorage.setItem('cart',JSON.stringify(tempArr))
    }
};


export default addToCart;