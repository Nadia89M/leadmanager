import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

import { withTranslation } from 'react-i18next';

export class FormT extends Component {
  state = {
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
    to_be_contacted_on: "SOON",
    status: "NEW",
    open: false
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = () => this.setState({
    open: !this.state.open
  });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message, company, city, region, district, address, number, last_action, to_be_contacted_on, status } = this.state;
    const lead = { name, email, message, company, city, region, district, address, number, last_action, to_be_contacted_on, status };
    this.props.addLead(lead);
    this.setState({
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
      open: false
    });
  };

  render() {
    const { t } = this.props;
    const { name, email, message, company, city, region, district, address, number, status, last_action, to_be_contacted_on, open } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h4 className="pb-3 page-title pull-left">{t('title.label')}<i className="fas fa-plus" onClick={this.onClick} hidden={open === true}></i><i className="fas fa-minus" onClick={this.onClick} hidden={open === false}></i></h4>
        <form onSubmit={this.onSubmit} hidden={open === false}>
          <div className="form-group">
            <label>{t('data1.label')}</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>{t('data2.label')}</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>{t('data3.label')}</label>
            <input
              className="form-control"
              type="number"
              name="number"
              onChange={this.onChange}
              value={number}
            />
          </div>
          <div className="form-group">
            <label>{t('data4.label')}</label>
            <input
              className="form-control"
              type="company"
              name="company"
              onChange={this.onChange}
              value={company}
            />
          </div>
          <div className="form-group">
            <label>{t('data5.label')}</label>
            <input
              className="form-control"
              type="region"
              name="region"
              onChange={this.onChange}
              value={region}
            />
          </div>
          <div className="form-group">
            <label>{t('data6.label')}</label>
            <input
              className="form-control"
              type="district"
              name="district"
              onChange={this.onChange}
              value={district}
            />
          </div>
          <div className="form-group">
            <label>{t('data7.label')}</label>
            <input
              className="form-control"
              type="city"
              name="city"
              onChange={this.onChange}
              value={city}
            />
          </div>
          <div className="form-group">
            <label>{t('data8.label')}</label>
            <input
              className="form-control"
              type="address"
              name="address"
              onChange={this.onChange}
              value={address}
            />
          </div>
          <div className="form-group">
            <label>{t('data9.label')}</label>
            <input
              className="form-control"
              type="date"
              name="last_action"
              onChange={this.onChange}
              value={last_action}
            />
          </div>
          <div className="form-group">
            <label>{t('data10.label')}</label>
            <select className="form-control" name="to_be_contacted_on" value={to_be_contacted_on} defaultValue={to_be_contacted_on} onChange={this.onChange}>
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
            <select className="form-control" name="status" value={status} defaultValue={status} onChange={this.onChange}>
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
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              {t('action3.label')}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const Form = withTranslation()(FormT)

export default connect(
  null,
  { addLead }
)(Form);
