import Navbar from "../Home/Navbar";
import Carddisplay from "./Carddisplay";
import ArticleSection from "./ArticleSection";
import Footer from "../Home/Footer"
import SponsorSection from "./sponsor";
import ShopProduct from "./ShopProduct";


function Shop() {
  return (
    <>
      <Navbar/>
      <Carddisplay />
      <ArticleSection />
      <ShopProduct />
      <SponsorSection />
      <Footer />
    </>
  )
}

export default Shop;