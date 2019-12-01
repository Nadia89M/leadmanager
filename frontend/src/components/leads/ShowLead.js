import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withTranslation } from 'react-i18next';

export class ShowLeadT extends Component {

    static propTypes = {
        currentLead: PropTypes.object.isRequired
    };

    render() {
        const { currentLead } = this.props;
        const { t } = this.props;

        return (
            <div className="card mt-4 mb-4">
                <ul className="list-group">
                    <li className="list-group-item"><h3><b>{t('data1.label')}</b>: {currentLead.name}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data2.label')}</b>: {currentLead.email}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data3.label')}</b>: {currentLead.message}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data4.label')}</b>: {currentLead.company}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data5.label')}</b>: {currentLead.city}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data6.label')}</b>: {currentLead.region}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data7.label')}</b>: {currentLead.district}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data8.label')}</b>: {currentLead.address}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data9.label')}</b>: {currentLead.number}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data10.label')}</b>: {currentLead.last_action}</h3></li>
                    <li className="list-group-item"><h3><b>{t('data11.label')}</b>:
                    {
                            currentLead.to_be_contacted_on == "SOON" ? ` ${t('month.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "JANUARY" ? ` ${t('month1.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "FEBRUARY" ? ` ${t('month2.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "MARCH" ? ` ${t('month3.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "APRIL" ? ` ${t('month4.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "MAY" ? ` ${t('month5.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "JUNE" ? ` ${t('month6.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "JULY" ? ` ${t('month7.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "AUGUST" ? ` ${t('month8.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "SEPTEMBER" ? ` ${t('month9.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "OCTOBER" ? ` ${t('month10.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "NOVEMBER" ? ` ${t('month11.label')}` : ""
                        }
                        {
                            currentLead.to_be_contacted_on == "DECEMBER" ? ` ${t('month12.label')}` : ""
                        }
                    </h3></li>
                    <li className="list-group-item"><h3><b>{t('data12.label')}</b>:
                        {
                            currentLead.status == "NEW" ? ` ${t('status1.label')}` : ""
                        }
                        {
                            currentLead.status == "CONTACTED" ? ` ${t('status2.label')}` : ""
                        }
                        {
                            currentLead.status == "CONNECTED" ? ` ${t('status3.label')}` : ""
                        }
                        {
                            currentLead.status == "OPEN" ? ` ${t('status4.label')}` : ""
                        }
                        {
                            currentLead.status == "UNQUALIFIED" ? ` ${t('status5.label')}` : ""
                        }
                    </h3></li>
                </ul>
            </div>
        );
    }
}

const ShowLead = withTranslation()(ShowLeadT)

const mapStateToProps = state => ({
    currentLead: state.leads.currentLead
});

export default connect(
    mapStateToProps
)(ShowLead);