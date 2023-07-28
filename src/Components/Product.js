import React, { useEffect, useState } from "react";

export default function Product({data=[],addToCart,isAdded=false}){
   let [cart, setCart] = useState();
  useEffect(()=>{
    if(isAdded===true){
      setCart("Remove to cart");
    }else if(isAdded===false){
      setCart("Add to cart");
    }
  });
  return(
        <div>
             <div className="col mb-5">
                    <div className="card h-100">
                       {/* Product image */}
                       < img  className=" card-img-top" src={data.Productimage} alt='...' />
                       {/* Product details */}
                       <div className="card-body p-4">
                         <div className="text-center">
                           {/* Product name */}
                           <h5 className="fw-bolder ">{data.Productname}</h5>
                           <p className="fw-bolder ">{data.Producttype}</p>
                           <h5 className="fw-bolder ">{data.Productprice}</h5>
                         </div>
                      </div>
                       {/* Product actions */}
                     <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                       <button onClick={()=>addToCart(data)} className="btn btn-outline-dark mt-auto" href='#'>{cart}</button>
                    </div>
                  </div>
                 </div>
               </div>
        </div>
    )
}