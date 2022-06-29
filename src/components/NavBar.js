const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://w7.pngwing.com/pngs/694/634/png-transparent-porky-s-lechon-barbecue-porky-s-lechon-barbecue-restaurant-domestic-pig-barbecue.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        Chanchito feliz
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;