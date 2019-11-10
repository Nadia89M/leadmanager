import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Link to="#" className="dropdown-item" onClick={this.props.logout}>
          Logout
        </Link>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Link to="/register" className="dropdown-item">
          Register
          </Link>
        <Link to="/login" className="dropdown-item">
          Login
      </Link>
      </Fragment>
    );

    return (
      <div className="page-title-area">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="breadcrumbs-area clearfix">
              <h4 className="page-title pull-left"><strong className="app-title">Lead Manager</strong></h4>
            </div>
          </div>
          <div className="col-sm-6 clearfix">
            <div className="user-profile pull-right">
              <h4 className="user-name dropdown-toggle" data-toggle="dropdown">{user ? `Welcome ${user.username}` : ""}<i className="fa fa-angle-down"></i></h4>
              <div className="dropdown-menu">
                {isAuthenticated ? authLinks : guestLinks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
