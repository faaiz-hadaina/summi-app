import * as types from "../../types";
import { Client } from "../../../services/client";
import { searchContact } from "../getcontacts";

export const bulkDelete = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ACTION_START });
    const existingSelected = getState().contactReducer?.selectedContacts || [];

    const response = await Client({
      method: "POST",
      path: `api/bulkdelete`,
      data: { selectedids: existingSelected }
    });
    console.log(response);
    dispatch(searchContact(""));
    dispatch({ type: types.ACTION_SUCCESS });

    dispatch({ type: types.SELECT_CONTACT_SUCCESS, payload: [] });
  } catch (e) {
    const { message } = e.response.data;
    dispatch({ type: types.ACTION_FAILED, message });
  }
};
