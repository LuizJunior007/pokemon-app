import Container from "react-bootstrap/esm/Container";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {

    return(
        <div className="main">
            <Header />

            <Container fluid="xxl" className="mt-5">
                {children}
            </Container>
            
            <Footer />
        </div>
    );

}

export default Layout;