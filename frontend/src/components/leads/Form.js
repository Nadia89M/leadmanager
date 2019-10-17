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
    status: "NEW"
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message, company, city, region, district, address, number, status } = this.state;
    const lead = { name, email, message, company, city, region, district, address, number, status };
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
      status: "NEW"
    });
  };

  render() {
    const { name, email, message, company, city, region, district, address, number, status } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
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
