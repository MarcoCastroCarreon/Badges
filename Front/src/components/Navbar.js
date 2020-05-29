import React, { Component, Fragment } from 'react';

import logo from '../images/mcastro-logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className='buttons-list'>
                        <li>
                            <Link className="btn btn-secondary" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="btn btn-secondary" to="/badges/list">Badges List</Link>
                        </li>
                        <li>
                            <Link className="btn btn-secondary" to="/badges/new">New Badge</Link>
                        </li>
                    </ul>

                </nav>
            </Fragment >
        )
    }
}

export default Navbar;