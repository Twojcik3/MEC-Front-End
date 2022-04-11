import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar bg-dark" role="navigation" id="fixed-sidebar">
            <div className="navigation">
                <li className="col-lg-6 nav-bar">
                    <NavLink to="/" exact={true}>Produkty</NavLink>
                </li>
                <li className="col-lg-6 nav-bar">
                    <NavLink to="/hot-deals">Najlepiej sprzedające się</NavLink>
                </li>
            </div>
        </nav>
    )
}
export default Navigation;