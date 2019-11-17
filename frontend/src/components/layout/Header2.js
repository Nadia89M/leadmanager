import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filteredLeads, getLeads } from "../../actions/leads";

class Header2 extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        filteredLeads: PropTypes.func.isRequired,
        filteredLeadsGroup: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getLeads();
        setTimeout(
            function () {
                this.props.filteredLeads();
            }
                .bind(this),
            500
        );
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        const guestDiv = (
            <Fragment>
                <div></div>
            </Fragment>
        )

        const authDiv = (
            <Fragment>
                <li className="dropdown">
                    <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
                        <span>{this.props.filteredLeadsGroup.length}</span>
                    </i>
                    <div className="dropdown-menu bell-notify-box notify-box">
                        <span className="notify-title">You have {`${this.props.filteredLeadsGroup.length === 1 ? `${this.props.filteredLeadsGroup.length}  new notification` : `${this.props.filteredLeadsGroup.length}  new notifications`}`}<Link to="/dashboard">View all</Link></span>
                        <div className="nofity-list">
                            {this.props.filteredLeadsGroup.map(lead => (
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="fas fa-phone btn-info"></i></div>
                                    <div className="notify-text">
                                        <p>Call {lead.name} {lead.name && lead.company ? '-' : ''} {lead.company}</p>
                                        <span> {lead.number} </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </li>
            </Fragment>
        );

        return (
            <Fragment>
                <div className="header-area">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-8 clearfix">
                            <div className="nav-btn pull-left">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-4 clearfix">
                            <ul className="notification-area pull-right">
                                <li id="full-view"><i className="ti-fullscreen"></i></li>
                                <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
                                {(isAuthenticated && window.location.href.endsWith("/")) ? authDiv : guestDiv}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    leads: state.leads.leads,
    filteredLeadsGroup: state.leads.filteredLeadsGroup
});

export default connect(
    mapStateToProps, { filteredLeads, getLeads }
)(Header2);