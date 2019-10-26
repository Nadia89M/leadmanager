import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, SET_CURRENT, EDIT_LEAD, SEARCH_LEADS, CLEAR_SEARCHED_LEADS } from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD
export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// EDIT LEAD
export const editLead = (id, lead) => (dispatch, getState) => {
  axios
    .put(`/api/leads/${id}/`, lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ editLead: "Lead Updated" }));
      dispatch({
        type: EDIT_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD LEAD
export const addLead = lead => (dispatch, getState) => {
  axios
    .post("/api/leads/", lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//SET CURRENT

export const setCurrent = id => (dispatch, getState) => {
  axios
    .get(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: SET_CURRENT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET SEARCHED LEADS
export const searchLeads = text => (dispatch) => {
  dispatch({
    type: SEARCH_LEADS,
    payload: text
  });
};

// GET SEARCHED LEADS
export const clearSearchedLeads = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEARCHED_LEADS
  });
};