import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filteredLeads, getLeads } from "../../actions/leads";

import { withTranslation } from 'react-i18next';

class HomeT extends Component {
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
        const { t } = this.props;

        return (
            <div className="row">
                <div className="col-12">
                    <div className="home-intro">
                        <h1 className="display-6">{t('hello.label')} {user ? ` ${user.username}!` : "!"}</h1>
                        <p className="lead"> {t('intro.label')}</p>
                        <hr className="my-4"></hr>
                        <p>{`${t('message1.label')} ${this.props.filteredLeadsGroup.length === 1 ? `${t('message2.label')} ${this.props.filteredLeadsGroup.length} ${t('message3.label')}` : `${t('message4.label')} ${this.props.filteredLeadsGroup.length} ${t('message5.label')}`} ${t('message6.label')}`}</p>
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

const Home = withTranslation()(HomeT)

const mapStateToProps = state => ({
    auth: state.auth,
    leads: state.leads.leads,
    filteredLeadsGroup: state.leads.filteredLeadsGroup
});

export default connect(
    mapStateToProps, { filteredLeads, getLeads }
)(Home);