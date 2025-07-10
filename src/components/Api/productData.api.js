const productDataApi=async(setProduct)=>{
    const res = await fetch('https://dummyjson.com/recipes')
    const responce = await res.json();
    if(res.status == 200 ){
        setProduct(responce.recipes)
    }
    // const data =[
    //     {
    //     id:1,
    //     name:'Pizza',
    //     image:'burger.jpg',
    //     caloriesPerServing:999,
    //     rating:5,
    //     mealType:"dinner",
        
    //     },
    //     {
    //     id:2,
    //     name:'Pizza',
    //     image:'burger.jpg',
    //     caloriesPerServing:999,
    //     rating:5,
    //     mealType:"dinner",
        
    //     },
    //     {
    //     id:3,
    //     name:'Pizza',
    //     image:'burger.jpg',
    //     caloriesPerServing:999,
    //     rating:5,
    //     mealType:"dinner",
        
    //     },
    //     {
    //     id:4,
    //     name:'Pizza',
    //     image:'burger.jpg',
    //     caloriesPerServing:999,
    //     rating:5,
    //     mealType:"dinner",
        
    //     }
    // ]
    // setProduct(data)
}

export default productDataApi