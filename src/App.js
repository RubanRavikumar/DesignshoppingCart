import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Product from './Components/Product';

const carddetials =[
  {
    Productimage :"https://m.media-amazon.com/images/I/41mt0QQkvKL._AC_SR400,600_.jpg",
    Productname :"Samsung Galaxy S22 5G",
    Producttype :"(Phantom White, 8GB RAM,...",
    Productprice :"₹94,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/4110sAYiUIL._AC_SR400,600_.jpg",
    Productname :"Tecno Spark 10 5G",
    Producttype :"(Meta Blue, 8GB RAM,256GB...",
    Productprice :"₹14,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41OTV3--tOL._AC_SR400,600_.jpg",
    Productname :"Tecno POVA 4",
    Producttype :"(Magma Orange,8GB RAM,128GB...",
    Productprice :"₹11,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41YYQ+tFwCL._AC_SR400,600_.jpg",
    Productname :"Samsung Galaxy S23 5G",
    Producttype :"(Lavender, 8GB, 256GB Storage)",
    Productprice :"₹79,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/411yauSjSmL._AC_SR400,600_.jpg",
    Productname :"Tecno Phantom X2Pro 5G",
    Producttype :" Mars Orange (12GB RAM,256GB...",
    Productprice :"₹44,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41CkKbseMGL._AC_SR400,600_.jpg",
    Productname :"Samsung Galaxy S20FE 5G",
    Producttype :" (Cloud Mint, 8GB RAM, 128GB...",
    Productprice :"₹31,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41yx-OTfNwL._AC_SR400,600_.jpg",
    Productname :"Oppo A78 5G",
    Producttype :"(Glowing Blue, 8GB RAM, 128 Storage) | 5000...",
    Productprice :"₹18,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41ntGH88Z2L._AC_SR400,600_.jpg",
    Productname :"Samsung Galaxy S22Ultra 5G",
    Producttype :"(Green, 12GB, 256GB Storage)...",
    Productprice :"₹94,999",
  }
]

const [cart,setCart]=useState([]);
  const addToCart=(data)=>{
    setCart([...cart,{...data,quantity:1}])
  }

function App() {
  return (
    <div> 
      <Navigation count={carddetials.length} /> 
      <Header />  
      {/* Section */}
      <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5" >
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
               carddetials.map((d, i)=>
                <Product data={d} addToCart={addToCart} />
               )
              }
            </div>
          </div>
      </section>
      <Footer />

   </div>
  )
}

export default App;
