import SecureFetch from "../Auth/apiConfiguration";
import mainEndPiont from "../mainEndPiont";
const generateOrder = async (orderDetail) => {
  
  console.log(orderDetail)
  try {
    const request = await SecureFetch(
      mainEndPiont+"order",
      "POST",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      orderDetail
    );
    if(request.status == 200){
        alert('Order Placed')
      localStorage.removeItem('cart')
      window.location.href = '/cart'
      
    }else if (request.status == 502){
      
    }
    else{
      
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default generateOrder;