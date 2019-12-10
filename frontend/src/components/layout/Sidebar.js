import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-menu">
                    <div className="sidebar-header">
                        <div className="logo">
                            <Link to="/"><div className="logo"></div></Link>
                        </div>
                    </div>
                    <div className="main-menu">
                        <div className="menu-inner">
                            <nav>
                                <ul className="metismenu" id="menu">
                                    <li>
                                        <Link to="/" className={window.location.href.endsWith("/") ? 'active' : ''}>
                                            <i className="fas fa-home"></i><span>
                                                Home
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className={window.location.href.endsWith("/dashboard") || window.location.href.endsWith("#") ? 'active' : ''}>
                                            <i className="ti-dashboard"></i><span>
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
