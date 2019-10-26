import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS, EDIT_LEAD, SET_CURRENT } from "../actions/types.js";

const initialState = {
  leads: [],
  currentLead: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
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
    default:
      return state;
  }
}
