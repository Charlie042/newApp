import Navbar from "./Navbar";
import Slide from "./Slide";
import Feature from "./Feature";
import Post from "./Post";
import Testimonial from "./Testimonial";
import CartBackground from "./CartBackground";
import Footer from './Footer'
import ProductContainer from "./ProductContainer";

function Main() {
  return (
    <>
      <Navbar />
      <Slide />
      <ProductContainer />
      <Feature />
      <Post />
      <Testimonial />
      <CartBackground />
      <Footer />
    </>
  );
}

export default Main;
