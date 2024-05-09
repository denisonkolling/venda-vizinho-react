import { trackWindowScroll } from "react-lazy-load-image-component";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#E7E7E7" }}>
      <Header />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default trackWindowScroll(HomePage);
