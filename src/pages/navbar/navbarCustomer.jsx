import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './navbarCustomer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { colors } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavbarCustomer() {
    const navigate = useNavigate()
    return (
        <header class="vh-100">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="#">Atma Bakery</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title fw-bold" id="offcanvasDarkNavbarLabel">Atma Bakery</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#">Delivery</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Cake</a></li>
                                        <li><hr class="dropdown-divider color-hr" /></li>
                                        <li><a class="dropdown-item" href="#">Bread</a></li>
                                        <li><hr class="dropdown-divider color-hr" /></li>
                                        <li><a class="dropdown-item" href="#">Drink</a></li>
                                        <li><hr class="dropdown-divider color-hr" /></li>
                                        <li><a class="dropdown-item" href="#">Custodian</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#">News</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" href="#">Faq</a>
                                </li>
                            </ul>
                            <Button variant="outline-danger" style={{ marginRight: '8px' }} onClick={() => { navigate('/register') }}>Register</Button>{' '}
                            <Button variant="outline-success" onClick={() => { navigate('/') }}>Sign In</Button>{' '}

                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default NavbarCustomer;
