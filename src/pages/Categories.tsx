import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Categories = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#E7E7E7" }}>
        <Container className="vh-100">Categories</Container>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
