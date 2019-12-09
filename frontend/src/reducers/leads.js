import { GET_LEADS, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS, EDIT_LEAD, SET_CURRENT, SEARCH_LEADS, CLEAR_SEARCHED_LEADS, SEARCH_STATUS_LEADS, SEARCH_MONTH_LEADS, FILTERED_LEADS } from "../actions/types.js";

const initialState = {
  leads: [],
  searchedLeads: [],
  currentLead: {},
  filteredLeadsGroup: [],
  proposalGroup: []
};

const monthNames = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];
const d = new Date();
const monthName = monthNames[d.getMonth()];
const day = ("0" + d.getDate()).slice(-2);
const month = d.getMonth() + 1;
const year = d.getFullYear();
const dateString = `${year}-${month}-${day}`

const getStringDate = (last_action) => {
  const last_action_date = new Date(last_action);
  const dayA = ("0" + (last_action_date.getDate() + 10)).slice(-2);
  const monthA = last_action_date.getMonth() + 1;
  const yearA = last_action_date.getFullYear();
  const dateStringLastAction = `${yearA}-${monthA}-${dayA}`;
  return dateStringLastAction
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
        searchedLeads: action.payload
      };
    case FILTERED_LEADS:
      return {
        ...state,
        filteredLeadsGroup: state.leads.filter(lead => (lead.to_be_contacted_on === "SOON" || lead.to_be_contacted_on.toLowerCase() === monthName) && lead.status.toLowerCase() !== 'unqualified'),
        proposalGroup: state.leads.filter(lead => getStringDate(lead.updated_at) <= dateString && lead.status.toLowerCase() === 'lead')
      };
    case SEARCH_STATUS_LEADS:
      return {
        ...state,
        searchedLeads: state.leads.filter(lead => lead.status == action.payload)
      };
    case SEARCH_MONTH_LEADS:
      return {
        ...state,
        searchedLeads: state.leads.filter(lead => lead.to_be_contacted_on == action.payload)
      };
    case SEARCH_LEADS:
      return {
        ...state,
        searchedLeads: state.leads.filter(lead => lead.company.toLowerCase() === action.payload.toLowerCase() || lead.company.toLowerCase().split(" ").includes(action.payload.toLowerCase()) || lead.name.toLowerCase() === action.payload.toLowerCase() || lead.name.toLowerCase().split(" ").includes(action.payload.toLowerCase()) || lead.region.toLowerCase() === action.payload.toLowerCase() || lead.region.toLowerCase().split(" ").includes(action.payload.toLowerCase()))
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload),
        searchedLeads: state.leads.filter(lead => lead.id !== action.payload),
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
        searchedLeads: [...state.leads, action.payload]
      };
    case EDIT_LEAD:
      return {
        ...state,
        leads: state.leads.map(lead =>
          lead.id === action.payload.id ? action.payload : lead
        ),
        searchedLeads: state.leads.map(lead =>
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
