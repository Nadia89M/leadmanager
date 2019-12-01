import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filteredLeads, getLeads } from "../../actions/leads";
import LanguageSelector from "./LanguageSelector";

import { withTranslation } from 'react-i18next';

class NotificationT extends Component {
    static propTypes = {
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
        const { t } = this.props;

        return (
            <Fragment>
                <li className="dropdown">
                    <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
                        <span>{this.props.filteredLeadsGroup.length}</span>
                    </i>
                    <div className="dropdown-menu bell-notify-box notify-box">
                        <span className="notify-title">{t('notification1.label')} {`${this.props.filteredLeadsGroup.length === 1 ? `${this.props.filteredLeadsGroup.length}  ${t('notification2.label')}` : `${this.props.filteredLeadsGroup.length}  ${t('notification3.label')}`}`}<Link to="/dashboard">{t('notification4.label')}</Link></span>
                        <div className="nofity-list">
                            {this.props.filteredLeadsGroup.map(lead => (
                                <a key={lead.id} href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="fas fa-phone btn-info"></i></div>
                                    <div className="notify-text">
                                        <p>{t('notification5.label')} {lead.name} {lead.name && lead.company ? '-' : ''} {lead.company}</p>
                                        <span> {lead.number} </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </li>
                <li>
                    <LanguageSelector />
                </li>
            </Fragment>
        )
    }
}

const Notification = withTranslation()(NotificationT)

const mapStateToProps = state => ({
    leads: state.leads.leads,
    filteredLeadsGroup: state.leads.filteredLeadsGroup
});

export default connect(
    mapStateToProps, { filteredLeads, getLeads }
)(Notification);