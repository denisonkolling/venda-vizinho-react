import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Products = () => {
  return (
    <div style={{ backgroundColor: "#E7E7E7" }}>
      <Header />
      <Container className="vh-100">Products</Container>
      <Footer />
    </div>
  );
};

export default Products;
