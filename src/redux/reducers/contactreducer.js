import {
  SEARCH_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  SELECT_CONTACT_SUCCESS,
  CLEAR_CONTACT_SUCCESS_MSG
} from "../types.js";

const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CONTACTS_SUCCESS:
      return { ...state, contacts: action.payload };
    case ADD_CONTACT_SUCCESS:
      return { ...state, addSuccess: action.payload };
    case CLEAR_CONTACT_SUCCESS_MSG:
      return { ...state, addSuccess: "" };
    case SELECT_CONTACT_SUCCESS:
      return { ...state, selectedContacts: action.payload };

    default:
      return state;
  }
};
export default contactReducer;
