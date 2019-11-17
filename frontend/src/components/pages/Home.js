import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filteredLeads, getLeads } from "../../actions/leads";

class Home extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        filteredLeads: PropTypes.func.isRequired,
        getLeads: PropTypes.func.isRequired,
        filteredLeadsGroup: PropTypes.number.isRequired
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
        const { user } = this.props.auth;
        return (
            <div className="row">
                <div className="col-12">
                    <div className="home-intro">
                        <h1 className="display-4">{user ? `Hello ${user.username}!` : "Hello!"}</h1>
                        <p className="lead">Leads are the lifeblood of a business, and this lead manager can help you keep track on them and follow their sales funnel.</p>
                        <hr className="my-4"></hr>
                        <p>{`There ${this.props.filteredLeadsGroup.length === 1 ? `is ${this.props.filteredLeadsGroup.length} lead which needs` : `are ${this.props.filteredLeadsGroup.length} leads which need`} to be contacted soon!`}</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="home-background">
                    </div>
                </div>
            </div>
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
)(Home);