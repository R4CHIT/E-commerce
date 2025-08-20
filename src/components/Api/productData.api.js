import mainEndPiont from "./mainEndPiont";

const productDataApi = async (setmainData, maindata) => {
  
    try {
        const res = await fetch(mainEndPiont + 'product');
    const responce = await res.json();
    
    if (res.status == 200) {
      setmainData(responce.data);
    }
    else if (res.status == 404) {
        console.log('err')
    }
    } catch (error) {
        
    }
    if (maindata.length === 0) {
      setTimeout(() => {
        productDataApi(setmainData, maindata);
      }, 5000);
    }
  
};

export default productDataApi;