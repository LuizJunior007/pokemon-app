import Container from "react-bootstrap/esm/Container";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ children }) => {

    const location = useLocation();
    const siteName = ' - Pokemon-app'

    useEffect(() => {

        if(location.pathname === '/'){

            document.title = 'Home ' + siteName;

        } else if(location.pathname === '/contato'){

            document.title = 'Contato ' + siteName

        } else if(location.pathname === '/sobre'){

            document.title = 'Sobre ' + siteName
        } 

    }, [location]);

    return(
        <div className="main">
            <div>
                <Header />

                <Container fluid="xxl" className="mt-5">
                    {children}
                </Container>
            </div>
            
            <Footer />
        </div>
    );

}

export default Layout;