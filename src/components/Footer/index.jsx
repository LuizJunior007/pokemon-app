const Footer = () => {

    const date = new Date();

    return(
        <footer className="bg-white p-3 mt-5 text-center">
            <small className="fw-medium">
                {date.getFullYear()} &copy; Todos os direitos reservados
            </small>
        </footer>
    );

}

export default Footer;