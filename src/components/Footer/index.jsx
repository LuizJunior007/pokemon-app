const Footer = () => {

    const date = new Date();

    return(
        <footer className="p-3 mt-5 text-center">
            <small className="fw-medium">
                {date.getFullYear()} &copy; Feito por L. jr
            </small>
        </footer>
    );

}

export default Footer;