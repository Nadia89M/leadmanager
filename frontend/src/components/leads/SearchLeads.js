import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLeads, clearSearchedLeads, searchStatusLeads, searchMonthLeads } from "../../actions/leads";

import { withTranslation } from 'react-i18next';

export class SearchLeadsT extends Component {
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
        const { t } = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
                <h4 className="pb-3 page-title pull-left">{t('search1.label')}<i className="fas fa-plus" onClick={this.onClick} hidden={open === true}></i><i className="fas fa-minus" onClick={this.onClick} hidden={open === false}></i></h4>
                <form onSubmit={this.onSubmit} hidden={open === false}>
                    <div className="search-box form-group">
                        <label>{t('search2.label')}</label>
                        <input value={this.state.text} className="form-control mr-sm-2" type="search" placeholder="Search ..." aria-label="Search" onChange={this.onChange}></input>
                        <button type="submit"><i className="ti-search"></i></button>
                    </div>
                    <div className="form-group">
                        <label>{t('data11.label')}</label>
                        <select className="form-control status-filter" name="status" value={this.state.status} defaultValue="All" onChange={this.onStatusChange}>
                            <option value="ALL">{t('status.label')}</option>
                            <option value="NEW">{t('status1.label')}</option>
                            <option value="CONTACTED">{t('status2.label')}</option>
                            <option value="CONNECTED">{t('status3.label')}</option>
                            <option value="OPEN">{t('status4.label')}</option>
                            <option value="UNQUALIFIED">{t('status5.label')}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>{t('data10.label')}</label>
                        <select className="form-control status-filter" name="to_be_contacted_on" value={this.state.to_be_contacted_on} defaultValue="All" onChange={this.onMonthChange}>
                            <option value="ALL">{t('status.label')}</option>
                            <option value="SOON">{t('month.label')}</option>
                            <option value="JANUARY">{t('month1.label')}</option>
                            <option value="FEBRUARY">{t('month2.label')}</option>
                            <option value="MARCH">{t('month3.label')}</option>
                            <option value="APRIL">{t('month4.label')}</option>
                            <option value="MAY">{t('month5.label')}</option>
                            <option value="JUNE">{t('month6.label')}</option>
                            <option value="JULY">{t('month7.label')}</option>
                            <option value="AUGUST">{t('month8.label')}</option>
                            <option value="SEPTEMBER">{t('month9.label')}</option>
                            <option value="OCTOBER">{t('month10.label')}</option>
                            <option value="NOVEMBER">{t('month11.label')}</option>
                            <option value="DECEMBER">{t('month12.label')}</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-danger clear-btn my-2 my-sm-0" onClick={this.clearLeads}>{t('action4.label')}</button>

                </form>
            </div>
        );
    }
}

const SearchLeads = withTranslation()(SearchLeadsT)

export default connect(
    null,
    { searchLeads, searchStatusLeads, searchMonthLeads, clearSearchedLeads }
)(SearchLeads);