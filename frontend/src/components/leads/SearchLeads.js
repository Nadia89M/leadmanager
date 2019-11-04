import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLeads, clearSearchedLeads, searchStatusLeads, searchMonthLeads } from "../../actions/leads";

export class SearchLeads extends Component {
    state = {
        text: "",
        open: false,
        status: "",
        to_be_contacted_on: ""
    };

    static propTypes = {
        clearSearchedLeads: PropTypes.func.isRequired,
        searchLeads: PropTypes.func.isRequired,
        searchStatusLeads: PropTypes.func.isRequired,
        searchMonthLeads: PropTypes.func.isRequired,
    };

    loadProps = () => {
        this.setState({
            searchedLeads: this.props.leads
        });
    }

    onChange = e => this.setState({ text: e.target.value });

    onStatusChange = e => {
        this.setState({ status: e.target.value });
        if (e.target.value === "ALL") {
            this.props.clearSearchedLeads();
        } else {
            this.props.searchStatusLeads(e.target.value);
        }
    }

    onMonthChange = e => {
        this.setState({ to_be_contacted_on: e.target.value });
        if (e.target.value === "ALL") {
            this.props.clearSearchedLeads();
        } else {
            this.props.searchMonthLeads(e.target.value);
        }
    }

    onClick = () => this.setState({
        open: !this.state.open
    });

    onSubmit = e => {
        const { text } = this.state;
        e.preventDefault();
        this.props.searchLeads(text);
        this.setState({
            text: ""
        });
    };

    clearLeads = e => {
        e.preventDefault();
        this.props.clearSearchedLeads();
        this.setState({ status: "ALL" });
    }

    render() {
        const { open } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h4 className="pb-3 page-title pull-left">Search Lead<i className="fas fa-plus" onClick={this.onClick} hidden={open === true}></i><i className="fas fa-minus" onClick={this.onClick} hidden={open === false}></i></h4>
                <form onSubmit={this.onSubmit} hidden={open === false}>
                    <div class="search-box form-group">
                        <label>Search per name, company or region</label>
                        <input value={this.state.text} className="form-control mr-sm-2" type="search" placeholder="Search ..." aria-label="Search" onChange={this.onChange}></input>
                        <button type="submit"><i class="ti-search"></i></button>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select className="form-control status-filter" name="status" value={this.state.status} defaultValue="All" onChange={this.onStatusChange}>
                            <option value="ALL">All</option>
                            <option value="NEW">New</option>
                            <option value="CONTACTED">Attempted to Contact</option>
                            <option value="CONNECTED">Connected</option>
                            <option value="OPEN">Open Deal</option>
                            <option value="UNQUALIFIED">Unqualified</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>To be contacted on</label>
                        <select className="form-control status-filter" name="to_be_contacted_on" value={this.state.to_be_contacted_on} defaultValue="All" onChange={this.onMonthChange}>
                            <option value="ALL">All</option>
                            <option value="SOON">Soon</option>
                            <option value="JANUARY">January</option>
                            <option value="FEBRUARY">February</option>
                            <option value="MARCH">March</option>
                            <option value="APRIL">April</option>
                            <option value="MAY">May</option>
                            <option value="JUNE">June</option>
                            <option value="JULY">July</option>
                            <option value="AUGUST">August</option>
                            <option value="SEPTEMBER">September</option>
                            <option value="OCTOBER">October</option>
                            <option value="NOVEMBER">November</option>
                            <option value="DECEMBER">December</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-danger clear-btn my-2 my-sm-0" onClick={this.clearLeads}>Clear</button>

                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { searchLeads, searchStatusLeads, searchMonthLeads, clearSearchedLeads }
)(SearchLeads);