import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    const logout = () => {
        localStorage.clear()
        dispatch({ type: "logout", payload: {} })
        navigate('/login');
        closeNavbar();
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-success fs-4 fw-bold" href="/home">CookIA</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isNavbarOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link text-success" onClick={closeNavbar}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pantry" className="nav-link text-success" onClick={closeNavbar}>
                                Mi despensa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recipe" className="nav-link text-success" onClick={closeNavbar}>
                                Generar Recetas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favorites" className="nav-link text-success">
                                Favoritos
                            </Link>
                        </li>
                        <li>

                            {
                                store.token == null ?
                                    <>
                                        < Link to="/login" onClick={closeNavbar}>
                                            <button className="btn btn-primary " type="button" style={{ backgroundColor: '#03C329', color: 'white' }}>Login</button>
                                        </Link>
                                    </> :
                                    <button className="btn btn-primary " type="button" style={{ backgroundColor: 'red', color: 'white' }}
                                        onClick={() => logout()}>Logout</button>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
