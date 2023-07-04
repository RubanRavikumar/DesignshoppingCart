import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import ShoppingCard from './Components/ShoppingCart';
import Footer from './Components/Footer';

const carddetials =[
  {
    Productimage :"https://m.media-amazon.com/images/I/41mt0QQkvKL._AC_SR400,600_.jpg",
    Producttype :"Samsung Galaxy S22 5G (Phantom White, 8GB RAM,...",
    Productprice :"₹94,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/4110sAYiUIL._AC_SR400,600_.jpg",
    Producttype :"Tecno Spark 10 5G (Meta Blue, 8GB RAM,256GB...",
    Productprice :"₹14,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41OTV3--tOL._AC_SR400,600_.jpg",
    Producttype :"Tecno POVA 4 (Magma Orange,8GB RAM,128GB...",
    Productprice :"₹11,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41YYQ+tFwCL._AC_SR400,600_.jpg",
    Producttype :"Samsung Galaxy S23 5G (Lavender, 8GB, 256GB Storage)",
    Productprice :"₹79,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/411yauSjSmL._AC_SR400,600_.jpg",
    Producttype :"Tecno Phantom X2 Pro 5G Mars Orange (12GB RAM,256GB...",
    Productprice :"₹44,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41CkKbseMGL._AC_SR400,600_.jpg",
    Producttype :"Samsung Galaxy S20 FE 5G (Cloud Mint, 8GB RAM, 128GB...",
    Productprice :"₹31,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41yx-OTfNwL._AC_SR400,600_.jpg",
    Producttype :"Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000...",
    Productprice :"₹18,999",
  },
  {
    Productimage :"https://m.media-amazon.com/images/I/41ntGH88Z2L._AC_SR400,600_.jpg",
    Producttype :"Samsung Galaxy S22 Ultra 5G (Green, 12GB, 256GB Storage)...",
    Productprice :"₹94,999",
  }
]

function App() {
  return (
    <div> 
      <Navigation />
      <Header />  
       {/* Section */}
       <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5" >
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
                   carddetials.map((d, i)=> (
                      < ShoppingCard data={d} />
                    ))
                   }
                </div>
            </div>
      </section>
      <Footer />
      
   </div>
  )
}

export default App;
