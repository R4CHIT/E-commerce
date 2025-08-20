import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./component/Card";
import Loading from './component/ProductLoadingSkelaton';

function Popularitem({ productData }) {
  const navigate = useNavigate();

  const itemsToShow = productData.slice(0, 8);

  return (
    <>
      <div className="mx-10 md:px-10 lg:px-20 md:mt-10 bg-whiten">
        {productData.length !== 0 ?(
          <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {itemsToShow.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Show More
          </button>
        </div>
          </>
          ):(
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {[1,2,3,4].map((item)=>(<Loading />))}
          </div>
        )}
      </div>
    </>
  );
}

export default Popularitem;
