import CarWidget from './CarWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://w7.pngwing.com/pngs/694/634/png-transparent-porky-s-lechon-barbecue-porky-s-lechon-barbecue-restaurant-domestic-pig-barbecue.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Chanchito feliz
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Sobre nosotros</Link>
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