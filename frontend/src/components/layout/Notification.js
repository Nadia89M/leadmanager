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
        proposalGroup: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired
    };

    componentDidUpdate(oldProps) {
        // By duplicating the data, you have to then
        // keep the local copy in sync with the
        // updated props...
        if (oldProps.filteredLeadsGroup !== this.props.filteredLeadsGroup || oldProps.proposalGroup !== this.props.proposalGroup) {
            this.props.getLeads();
            setTimeout(
                function () {
                    this.props.filteredLeads();
                }
                    .bind(this),
                500
            );
        }
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
                        <span className="notify-title">{`${t('message1.label')} ${this.props.filteredLeadsGroup.length === 1 ? `${t('message2.label')} ${this.props.filteredLeadsGroup.length} ${t('message3.label')}` : `${t('message4.label')} ${this.props.filteredLeadsGroup.length} ${t('message5.label')}`} ${t('message6.label')}`}</span>
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
                <li className="dropdown">
                    <i className="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span>{this.props.proposalGroup.length}</span></i>
                    <div className="dropdown-menu notify-box nt-enveloper-box">
                        <span className="notify-title">{`${t('proposal1.label')} ${this.props.proposalGroup.length === 1 ? `${t('proposal2.label')} ${this.props.proposalGroup.length} ${t('proposal3.label')}` : `${t('proposal4.label')} ${this.props.proposalGroup.length} ${t('proposal5.label')}`} ${t('proposal6.label')}`}</span>
                        <div className="nofity-list">
                            {this.props.proposalGroup.map(lead => (
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
    filteredLeadsGroup: state.leads.filteredLeadsGroup,
    proposalGroup: state.leads.proposalGroup
});

export default connect(
    mapStateToProps, { filteredLeads, getLeads }
)(Notification);