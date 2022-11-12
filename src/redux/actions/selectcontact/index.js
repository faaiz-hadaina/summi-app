import * as types from "../../types";
import { updateContact } from "../updatecontact";

export const selectContact = (id) => async (dispatch, getState) => {
  const existingSelected = getState().contactReducer?.selectedContacts || [];
  let updatedContacts = [];
  if (existingSelected.includes(id)) {
    updatedContacts = existingSelected.filter((item) => item !== id);
  } else {
    updatedContacts = [...existingSelected, id];
  }

  dispatch({ type: types.SELECT_CONTACT_SUCCESS, payload: updatedContacts });
};
