import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Offers = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#E7E7E7" }}>
        <Container className="vh-100">Offers</Container>
      </div>
      <Footer />
    </>
  );
};

export default Offers;
