import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filteredLeads, getLeads } from "../../actions/leads";
import Notification from "./Notification";

class Header2 extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        filteredLeads: PropTypes.func.isRequired,
        filteredLeadsGroup: PropTypes.array.isRequired,
        proposalGroup: PropTypes.array.isRequired,
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
                                {(isAuthenticated) ? <Notification /> : ""}
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
    filteredLeadsGroup: state.leads.filteredLeadsGroup,
    proposalGroup: state.leads.proposalGroup,
});

export default connect(
    mapStateToProps, { filteredLeads, getLeads }
)(Header2);