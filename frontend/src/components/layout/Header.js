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
      <div class="page-title-area">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="breadcrumbs-area clearfix">
              <h4 class="page-title pull-left"><strong class="app-title">Lead Manager</strong></h4>
            </div>
          </div>
          <div class="col-sm-6 clearfix">
            <div class="user-profile pull-right">
              <h4 class="user-name dropdown-toggle" data-toggle="dropdown">{user ? `Welcome ${user.username}` : ""}<i class="fa fa-angle-down"></i></h4>
              <div class="dropdown-menu">
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
