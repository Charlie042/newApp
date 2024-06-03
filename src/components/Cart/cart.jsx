import Footer from "../Home/footer";
import Navbar from "../Home/Navbar";
import CartItems from "./cartItems";
import CartSection from "./addcart";



function Cart() {
  return (
    <>
      <Navbar />
      <CartSection />
      <CartItems />
      <Footer />
    </>
  )
}

export default Cart;