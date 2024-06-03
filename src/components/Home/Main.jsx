import Navbar from "./Navbar";
import Slide from "./Slide";
import Feature from "./feature";
import Post from "./Post";
import Testimonial from "./Testimonial";
import CartBackground from "./CartBackground";
import Footer from "./footer";
import ProductContainer from "./productContainer";

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
