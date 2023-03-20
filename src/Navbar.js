import React from 'react';
import { Outlet } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/">My Products</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/products">Products <span className="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
    </nav>
    <Outlet />
  </>
  );
}