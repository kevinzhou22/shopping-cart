import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>COVID-19 Supplies</h1>
      </Link>
      <nav>
        <ul>
          <NavLink to="/" activeClassName="active-link" exact>
            <li>Home</li>
          </NavLink>
          <NavLink to="/supplies" activeClassName="active-link" exact>
            <li>Supplies</li>
          </NavLink>
          <NavLink to="/cart" activeClassName="active-link" exact>
            <li><i className="fas fa-shopping-cart" /></li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
