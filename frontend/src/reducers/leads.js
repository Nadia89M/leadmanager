import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS, EDIT_LEAD, SET_CURRENT, SEARCH_LEADS, CLEAR_SEARCHED_LEADS } from "../actions/types.js";

const initialState = {
  leads: [],
  searchedLeads: [],
  currentLead: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
        searchedLeads: action.payload
      };
    case SEARCH_LEADS:
      return {
        ...state,
        searchedLeads: state.leads.filter(lead => lead.company.toLowerCase() === action.payload.toLowerCase() || lead.company.toLowerCase().split(" ").includes(action.payload.toLowerCase()))
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload]
      };
    case EDIT_LEAD:
      return {
        ...state,
        leads: state.leads.map(lead =>
          lead.id === action.payload.id ? action.payload : lead
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        currentLead: action.payload
      };
    case CLEAR_LEADS:
      return {
        ...state,
        leads: []
      };
    case CLEAR_SEARCHED_LEADS:
      return {
        ...state,
        searchedLeads: state.leads
      };
    default:
      return state;
  }
}
