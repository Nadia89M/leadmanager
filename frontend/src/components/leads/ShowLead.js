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
            <div className="card mt-4 mb-4">
                <ul class="list-group">
                    <li class="list-group-item"><h3><b>Name</b>: {currentLead.name}</h3></li>
                    <li class="list-group-item"><h3><b>Email</b>: {currentLead.email}</h3></li>
                    <li class="list-group-item"><h3><b>Message</b>: {currentLead.message}</h3></li>
                    <li class="list-group-item"><h3><b>Company</b>: {currentLead.company}</h3></li>
                    <li class="list-group-item"><h3><b>City</b>: {currentLead.city}</h3></li>
                    <li class="list-group-item"><h3><b>Region</b>: {currentLead.region}</h3></li>
                    <li class="list-group-item"><h3><b>District</b>: {currentLead.district}</h3></li>
                    <li class="list-group-item"><h3><b>Address</b>: {currentLead.address}</h3></li>
                    <li class="list-group-item"><h3><b>Number</b>: {currentLead.number}</h3></li>
                    <li class="list-group-item"><h3><b>Last action</b>: {currentLead.last_action}</h3></li>
                    <li class="list-group-item"><h3><b>To be contacted on</b>: {currentLead.to_be_contacted_on}</h3></li>
                    <li class="list-group-item"><h3><b>Status</b>: {currentLead.status}</h3></li>
                </ul>
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