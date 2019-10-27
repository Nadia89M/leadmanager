import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
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
    const { name, email, message, company, city, region, district, address, number, status, last_action, to_be_contacted_on, open } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead <i className="fas fa-plus" onClick={this.onClick} hidden={open === true}></i><i className="fas fa-minus" onClick={this.onClick} hidden={open === false}></i></h2>
        <form onSubmit={this.onSubmit} hidden={open === false}>
          <div className="form-group">
            <label>Status</label>
            <select className="form-control" name="status" value={status} defaultValue={status} onChange={this.onChange}>
              <option value="NEW">New</option>
              <option value="CONTACTED">Attempted to Contact</option>
              <option value="CONNECTED">Connected</option>
              <option value="OPEN">Open Deal</option>
              <option value="UNQUALIFIED">Unqualified</option>
            </select>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              className="form-control"
              type="number"
              name="number"
              onChange={this.onChange}
              value={number}
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              className="form-control"
              type="company"
              name="company"
              onChange={this.onChange}
              value={company}
            />
          </div>
          <div className="form-group">
            <label>Region</label>
            <input
              className="form-control"
              type="region"
              name="region"
              onChange={this.onChange}
              value={region}
            />
          </div>
          <div className="form-group">
            <label>District</label>
            <input
              className="form-control"
              type="district"
              name="district"
              onChange={this.onChange}
              value={district}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              className="form-control"
              type="city"
              name="city"
              onChange={this.onChange}
              value={city}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="address"
              name="address"
              onChange={this.onChange}
              value={address}
            />
          </div>
          <div className="form-group">
            <label>Last Action</label>
            <input
              className="form-control"
              type="date"
              name="last_action"
              onChange={this.onChange}
              value={last_action}
            />
          </div>
          <div className="form-group">
            <label>To be contacted on</label>
            <select className="form-control" name="to_be_contacted_on" value={to_be_contacted_on} defaultValue={to_be_contacted_on} onChange={this.onChange}>
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
          <div className="form-group">
            <label>Message</label>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
