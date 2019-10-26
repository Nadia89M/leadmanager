import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editLead } from "../../actions/leads";

export class EditLead extends Component {
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
        status: "NEW",
        isModalOpen: false
    };

    static propTypes = {
        editLead: PropTypes.func.isRequired,
        currentLead: PropTypes.object.isRequired
    };

    modalOpen = () => {
        if (this.state.isModalOpen === false) {
            setTimeout(() => {
                this.loadProps();
            }, 3000);
        }
        this.setState({
            isModalOpen: true
        });
    }

    modalClose = () => this.setState({
        isModalOpen: false
    });


    loadProps = () => {
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
            status: this.props.currentLead.status
        });
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const { name, email, message, company, city, region, district, address, number, status } = this.state;
        const lead = { name, email, message, company, city, region, district, address, number, status };
        const id = this.props.currentLead.id;
        this.props.editLead(id, lead);
    };

    render() {
        return (
            <div className="card card-body mt-4 mb-4">
                <form onSubmit={this.onSubmit} onMouseEnter={this.modalOpen}>
                    <div className="form-group">
                        <label>Status</label>

                        <select className="form-control" name="status" value={this.state.status} defaultValue={this.props.currentLead.status} onChange={this.handleInputChange}>
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
                            ref="name"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            className="form-control"
                            type="number"
                            name="number"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.number}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <input
                            className="form-control"
                            type="company"
                            name="company"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.company}
                        />
                    </div>
                    <div className="form-group">
                        <label>Region</label>
                        <input
                            className="form-control"
                            type="region"
                            name="region"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.region}
                        />
                    </div>
                    <div className="form-group">
                        <label>District</label>
                        <input
                            className="form-control"
                            type="district"
                            name="district"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.district}
                        />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input
                            className="form-control"
                            type="city"
                            name="city"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.city}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            className="form-control"
                            type="address"
                            name="address"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.address}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.handleInputChange}
                            defaultValue={this.props.currentLead.message}
                        />
                    </div>
                    <div className="form-group">
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" onClick={this.modalClose}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    currentLead: state.leads.currentLead,
    leads: state.leads.leads
});

export default connect(
    mapStateToProps,
    { editLead }
)(EditLead);
