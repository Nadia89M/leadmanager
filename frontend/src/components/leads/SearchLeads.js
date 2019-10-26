import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLeads, clearSearchedLeads } from "../../actions/leads";

export class SearchLeads extends Component {
    state = {
        text: "",
        open: false
    };

    static propTypes = {
        clearSearchedLeads: PropTypes.func.isRequired,
        searchLeads: PropTypes.func.isRequired,
    };

    loadProps = () => {
        this.setState({
            searchedLeads: this.props.leads
        });
    }

    onChange = e => this.setState({ text: e.target.value });

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
    }

    render() {
        const { open } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Search Lead <i className="fas fa-plus" onClick={this.onClick} hidden={open === true}></i><i className="fas fa-minus" onClick={this.onClick} hidden={open === false}></i></h2>
                <form className="form-inline" onSubmit={this.onSubmit} hidden={open === false}>
                    <input value={this.state.text} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onChange}></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <button className="btn btn-outline-danger clear-btn my-2 my-sm-0" onClick={this.clearLeads}>Clear</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { searchLeads, clearSearchedLeads }
)(SearchLeads);