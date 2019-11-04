import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="sidebar-menu">
                    <div class="sidebar-header">
                        <div class="logo">
                            <a href="index.html"><div className="logo"></div></a>
                        </div>
                    </div>
                    <div class="main-menu">
                        <div class="menu-inner">
                            <nav>
                                <ul class="metismenu" id="menu">
                                    <li>
                                        <Link to="/" className={window.location.href.endsWith("/") ? 'active' : ''}>
                                            <i class="fas fa-home"></i><span>
                                                Home
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className={window.location.href.endsWith("dashboard") ? 'active' : ''}>
                                            <i class="ti-dashboard"></i><span>
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
