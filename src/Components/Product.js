import React from "react";

export default function Product({data=[],addToCart}){
    return(
        <div>
             <div className="col mb-5">
                    <div className="card h-100">
                       {/* Product image */}
                       < img  className=" card-img-top" src={d.Productimage} alt='...' />
                       {/* Product details */}
                       <div className="card-body p-4">
                         <div className="text-center">
                         {/* Product name */}
                              <h5 className="fw-bolder ">{d.Productname}</h5>
                              <h5 className="fw-bolder ">{d.Producttype}</h5>
                              {/* Product review*/}
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                              </div>
                             {d. Productprice} 
                         </div>
                      </div>
                       {/* Product actions */}
                     <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                       <button onClick={()=>addToCart(data)} className="btn btn-outline-dark mt-auto" href='#'>Add to cart</button>
                    </div>
                  </div>
                 </div>
               </div>
        </div>
    )
}