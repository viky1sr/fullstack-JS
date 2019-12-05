import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class NavbarComponent extends Component{
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Excercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Excercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">User Excercises</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}