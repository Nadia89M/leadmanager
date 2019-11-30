import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editLead } from "../../actions/leads";

import { withTranslation } from 'react-i18next';

export class EditLeadT extends Component {
    state = {
        id: null,
        name: "",
        email: "",
        message: "",
        company: "",
        city: "",
        region: "",
        district: "",
        address: "",
        number: "",
        last_action: null,
        to_be_contacted_on: "",
        status: "NEW",
        isModalOpen: false
    };

    static propTypes = {
        editLead: PropTypes.func.isRequired,
        currentLead: PropTypes.object.isRequired
    };

    componentDidUpdate(oldProps) {
        // By duplicating the data, you have to then
        // keep the local copy in sync with the
        // updated props...
        if (oldProps.currentLead !== this.props.currentLead) {
            this.setState({
                id: this.props.currentLead.id,
                name: this.props.currentLead.name,
                email: this.props.currentLead.email,
                message: this.props.currentLead.message,
                company: this.props.currentLead.company,
                city: this.props.currentLead.city,
                region: this.props.currentLead.region,
                district: this.props.currentLead.district,
                address: this.props.currentLead.address,
                number: this.props.currentLead.number,
                last_action: this.props.currentLead.last_action,
                to_be_contacted_on: this.props.currentLead.to_be_contacted_on,
                status: this.props.currentLead.status
            });
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const { name, email, message, company, city, region, district, address, number, last_action, to_be_contacted_on, status } = this.state;
        const lead = { name, email, message, company, city, region, district, address, number, last_action, to_be_contacted_on, status };
        const id = this.props.currentLead.id;
        this.props.editLead(id, lead);
        document.getElementById('close-modal').click();
    };

    render() {
        const { t } = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>{t('data1.label')}</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            ref="name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data2.label')}</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data3.label')}</label>
                        <input
                            className="form-control"
                            type="number"
                            name="number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.number}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data4.label')}</label>
                        <input
                            className="form-control"
                            type="company"
                            name="company"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.company}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data5.label')}</label>
                        <input
                            className="form-control"
                            type="region"
                            name="region"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.region}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data6.label')}</label>
                        <input
                            className="form-control"
                            type="district"
                            name="district"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.district}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data7.label')}</label>
                        <input
                            className="form-control"
                            type="city"
                            name="city"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.city}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data8.label')}</label>
                        <input
                            className="form-control"
                            type="address"
                            name="address"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.address}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data9.label')}</label>
                        <input
                            className="form-control"
                            type="date"
                            name="last_action"
                            defaultValue={this.props.currentLead.last_action}
                            onBlur={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('data10.label')}</label>
                        <select className="form-control" name="to_be_contacted_on" defaultValue={this.props.to_be_contacted_on} value={this.state.to_be_contacted_on} onChange={this.handleInputChange} onFocus={this.handleInputChange}>
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
                    <div className="form-group">
                        <label>{t('data11.label')}</label>

                        <select className="form-control" name="status" defaultValue={this.props.currentLead.status} value={this.state.status} onChange={this.handleInputChange} onFocus={this.handleInputChange}>
                            <option value="NEW">{t('status1.label')}</option>
                            <option value="CONTACTED">{t('status2.label')}</option>
                            <option value="CONNECTED">{t('status3.label')}</option>
                            <option value="OPEN">{t('status4.label')}</option>
                            <option value="UNQUALIFIED">{t('status5.label')}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>{t('data12.label')}</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputChange}
                            defaultValue={this.props.currentLead.message}
                        />
                    </div>
                    <div className="form-group">
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary mr-auto" onClick={this.closeModal}>
                                {t('action1.label')}
                            </button>
                            <button id="close-modal" type="button" className="btn btn-secondary" data-dismiss="modal">{t('action2.label')}</button>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

const EditLead = withTranslation()(EditLeadT)

const mapStateToProps = state => ({
    currentLead: state.leads.currentLead,
    leads: state.leads.leads
});

export default connect(
    mapStateToProps,
    { editLead }
)(EditLead);
