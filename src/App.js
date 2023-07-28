import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './Components/Product';
import { useState } from 'react';

const carddetials =[
  {
    id :1,
    Productname :"Samsung GalaxyS22 5G",
    Productimage :"https://m.media-amazon.com/images/I/41mt0QQkvKL._AC_SR400,600_.jpg",
    Producttype :"(Phantom White, 8GB RAM,256GB Storage...",
    Productprice :"₹94,999",
  },
  {
    id :2,
    Productname :"Tecno Spark10 5G",
    Productimage :"https://m.media-amazon.com/images/I/4110sAYiUIL._AC_SR400,600_.jpg",
    Producttype :"(Meta Blue, 8GB RAM,256GB Storage 4000MAH...",
    Productprice :"₹14,999",
  },
  {
    id :3,
    Productname :"Tecno POVA4",
    Productimage :"https://m.media-amazon.com/images/I/41OTV3--tOL._AC_SR400,600_.jpg",
    Producttype :"(Magma Orange,8GB RAM,128GB Storage...",
    Productprice :"₹11,999",
  },
  {
    id :4,
    Productname :"Samsung GalaxyS23 5G",
    Productimage :"https://m.media-amazon.com/images/I/41YYQ+tFwCL._AC_SR400,600_.jpg",
    Producttype :"(Lavender, 8GB, 256GB Storage)",
    Productprice :"₹79,999",
  },
  {
    id :5,
    Productname :"Tecno PhantomX2Pro 5G",
    Productimage :"https://m.media-amazon.com/images/I/411yauSjSmL._AC_SR400,600_.jpg",
    Producttype :"(12GB RAM,256GB Storage..",
    Productprice :"₹44,999",
  },
  {
    id :6,
    Productname :"Samsung GalaxyS20 FE 5G",
    Productimage :"https://m.media-amazon.com/images/I/41CkKbseMGL._AC_SR400,600_.jpg",
    Producttype :"(Cloud Mint, 8GB RAM,...",
    Productprice :"₹31,999",
  },
  { 
    id :7,
    Productname :"Oppo A78 5G",
    Productimage :"https://m.media-amazon.com/images/I/41yx-OTfNwL._AC_SR400,600_.jpg",
    Producttype :"(Glowing Blue, 8GB RAM, 128 Storage) | 5000...",
    Productprice :"₹18,999",
  },
  {
    id :8,
    Productname :"Samsung GalaxyS22 Ultra 5G",
    Productimage :"https://m.media-amazon.com/images/I/41ntGH88Z2L._AC_SR400,600_.jpg",
    Producttype :"(12GB, 256GB Storage)...",
    Productprice :"₹94,999",
  }
]

function App() {
  const [cart,setCart] = useState([]);

  function addToCart(data ={}){
    if(data.id){
     let cartCopy = [...cart];
     cartCopy.push({...data,quantity:1});
     setCart(cartCopy);
    }
  };
  const isAddedToCart =(cart=[],item={})=>{
    return cart.some((d)=> d.id===item.id)
  }
  return (
    <div> 
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">     
            <div className=" container px-4 px-lg-5">
              <a className="navbar-brand" href='#!'>Start Bootstrap</a>
              <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className="navbar-toggler-icon"></span>
              </button>             
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                     <li className="nav-item">
                         <a className="nav-link active" aria-current='page' href='#!'>Home</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href='#!'>About</a>
                     </li>
                     <li className="nav-item dropdown">
                         <a className="nav-link" href='#!'>Shop</a>
                     </li>
                 </ul>
                 <form className="d-flex">
                     <button className="btn btn-outline-dark">
                        <i className="bi-cart-fill me-1" />
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{cart?.length || 0}</span>
                     </button>
                 </form>
              </div>
            </div>
        </nav>
        {/* Header */}
        <Header />  
        {/* Section */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5" >
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                 carddetials.map((d, i)=>( 
                   <Product
                    data={d} 
                    key={`product-id-${i}`}  dd d
                    addToCart={addToCart} 
                     isAdded={isAddedToCart(cart,d)} />
                   ))}
            </div>
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default App;
