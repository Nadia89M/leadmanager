import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead, setCurrent } from "../../actions/leads";
import EditLead from "./EditLead";
import ShowLead from "./ShowLead";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    searchedLeads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Lead</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <EditLead />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="showModal" tabIndex="-1" role="dialog" aria-labelledby="showModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Show Lead</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ShowLead />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <h4 className="pb-3 page-title pull-left">Leads</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Company</th>
              <th>City</th>
              <th>Region</th>
              <th>District</th>
              <th>Address</th>
              <th>Number</th>
              <th>Last action</th>
              <th>To be contacted on</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.searchedLeads.map(lead => (
              <tr key={lead.id} >
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>{lead.company}</td>
                <td>{lead.city}</td>
                <td>{lead.region}</td>
                <td>{lead.district}</td>
                <td>{lead.address}</td>
                <td>{lead.number}</td>
                <td>{lead.last_action}</td>
                <td>{lead.to_be_contacted_on}</td>
                <td>{lead.status}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <a className="px-2" href="#" data-toggle="modal" data-target="#showModal" onClick={this.props.setCurrent.bind(this, lead.id)}>
                      {" "}
                      <i class="far fa-eye"></i>
                    </a>
                    <a className="px-2 d-lg-block" href="#" data-toggle="modal" data-target="#editModal" onClick={this.props.setCurrent.bind(this, lead.id)}>
                      {" "}
                      <i class="fa fa-edit"></i>
                    </a>
                    <a className="px-2" href="#"
                      onClick={this.props.deleteLead.bind(this, lead.id)}
                    >
                      {" "}
                      <i class="ti-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads,
  searchedLeads: state.leads.searchedLeads,
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead, setCurrent }
)(Leads);
