import * as types from "../../types";
import { Client } from "../../../services/client";
import { searchContact } from "../getcontacts";

export const deleteContact = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ACTION_START });
    const response = await Client({
      method: "DELETE",
      path: `api/${id}`
    });

    dispatch(searchContact(""));

    dispatch({ type: types.ACTION_SUCCESS });
  } catch (e) {
    console.log(e);
    const { message } = e.response.data;
    dispatch({ type: types.ACTION_FAILED, message });
  }
};
