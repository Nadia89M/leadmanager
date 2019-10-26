import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
export class ShowLead extends Component {

    static propTypes = {
        currentLead: PropTypes.object.isRequired
    };

    render() {
        const { currentLead } = this.props;
        return (
            <div className="card card-body mt-4 mb-4">
                <h4><b>Name</b>: {currentLead.name}</h4>
                <h4><b>Email</b>: {currentLead.email}</h4>
                <h4><b>Message</b>: {currentLead.message}</h4>
                <h4><b>Company</b>: {currentLead.company}</h4>
                <h4><b>City</b>: {currentLead.city}</h4>
                <h4><b>Region</b>: {currentLead.region}</h4>
                <h4><b>District</b>: {currentLead.district}</h4>
                <h4><b>Address</b>: {currentLead.address}</h4>
                <h4><b>Number</b>: {currentLead.number}</h4>
                <h4><b>Status</b>: {currentLead.status}</h4>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentLead: state.leads.currentLead
});

export default connect(
    mapStateToProps
)(ShowLead);