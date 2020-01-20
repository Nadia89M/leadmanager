import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, setCurrent } from '../../actions/leads';
import EditLead from './EditLead';
import ShowLead from './ShowLead';

import { withTranslation } from 'react-i18next';

export class LeadsT extends Component {
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

  deleteLead = id => {
    this.props.deleteLead(id);
    this.props.history.push('/#/dashboard');
  };

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <div
          className='modal fade'
          id='editModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='editModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  {t('title1.label')}
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <EditLead current={this.props.currentLead} />
              </div>
            </div>
          </div>
        </div>
        <div
          className='modal fade'
          id='showModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='showModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  {t('title2.label')}
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <ShowLead />
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  {t('action2.label')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <h4 className='pb-3 page-title pull-left'>Leads</h4>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>{t('data1.label')}</th>
              <th className='d-none d-lg-table-cell'>{t('data2.label')}</th>
              <th>{t('data3.label')}</th>
              <th className='d-none d-xl-table-cell'>{t('data4.label')}</th>
              <th>{t('data5.label')}</th>
              <th className='d-none d-xl-table-cell'>{t('data6.label')}</th>
              <th className='d-none d-xl-table-cell'>{t('data7.label')}</th>
              <th className='d-none d-lg-table-cell'>{t('data8.label')}</th>
              <th className='d-none d-xl-table-cell'>{t('data9.label')}</th>
              <th className='d-none d-xl-table-cell'>{t('data10.label')}</th>
              <th className='d-none d-xl-table-cell'>{t('data11.label')}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.searchedLeads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td className='d-none d-lg-table-cell'>{lead.email}</td>
                <td>{lead.number}</td>
                <td className='d-none d-xl-table-cell'>{lead.company}</td>
                <td>{lead.region}</td>
                <td className='d-none d-xl-table-cell'>{lead.district}</td>
                <td className='d-none d-xl-table-cell'>{lead.city}</td>
                <td className='d-none d-lg-table-cell'>{lead.address}</td>
                <td className='d-none d-xl-table-cell'>{lead.last_action}</td>
                <td className='d-none d-xl-table-cell'>
                  {lead.to_be_contacted_on == 'SOON'
                    ? `${t('month.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'JANUARY'
                    ? `${t('month1.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'FEBRUARY'
                    ? `${t('month2.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'MARCH'
                    ? `${t('month3.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'APRIL'
                    ? `${t('month4.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'MAY'
                    ? `${t('month5.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'JUNE'
                    ? `${t('month6.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'JULY'
                    ? `${t('month7.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'AUGUST'
                    ? `${t('month8.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'SEPTEMBER'
                    ? `${t('month9.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'OCTOBER'
                    ? `${t('month10.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'NOVEMBER'
                    ? `${t('month11.label')}`
                    : ''}
                  {lead.to_be_contacted_on == 'DECEMBER'
                    ? `${t('month12.label')}`
                    : ''}
                </td>
                <td className='d-none d-xl-table-cell'>
                  {lead.status == 'NEW' ? `${t('status1.label')}` : ''}
                  {lead.status == 'CONTACTED' ? `${t('status2.label')}` : ''}
                  {lead.status == 'CONNECTED' ? `${t('status3.label')}` : ''}
                  {lead.status == 'OPEN' ? `${t('status4.label')}` : ''}
                  {lead.status == 'LEAD' ? `${t('status5.label')}` : ''}
                  {lead.status == 'CLIENT' ? `${t('status6.label')}` : ''}
                  {lead.status == 'UNQUALIFIED' ? `${t('status7.label')}` : ''}
                </td>
                <td>
                  <div className='d-flex justify-content-center'>
                    <a
                      className='px-2'
                      href='#'
                      data-toggle='modal'
                      data-target='#showModal'
                      onClick={this.props.setCurrent.bind(this, lead.id)}
                    >
                      {' '}
                      <i className='far fa-eye'></i>
                    </a>
                    <a
                      className='px-2'
                      href='#'
                      data-toggle='modal'
                      data-target='#editModal'
                      onClick={this.props.setCurrent.bind(this, lead.id)}
                    >
                      {' '}
                      <i className='fa fa-edit'></i>
                    </a>
                    <a
                      className='px-2'
                      href='#'
                      onClick={this.deleteLead.bind(this, lead.id)}
                    >
                      {' '}
                      <i className='ti-trash'></i>
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

const Leads = withTranslation()(LeadsT);

const mapStateToProps = state => ({
  leads: state.leads.leads,
  searchedLeads: state.leads.searchedLeads
});

export default connect(mapStateToProps, { getLeads, deleteLead, setCurrent })(
  Leads
);
