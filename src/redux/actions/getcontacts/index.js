import * as types from "./../../types";
import { Client } from "./../../../services/client";

export const searchContact = (search) => async (dispatch, getState) => {
  try {
    // dispatch({ type: types.ACTION_START });

    const response = await Client({
      method: "GET",
      path: `api/search?search=${search}`
    });

    const responseData = response.data;

    dispatch({ type: types.ACTION_SUCCESS });
    dispatch({ type: types.SEARCH_CONTACTS_SUCCESS, payload: responseData });
  } catch (e) {
    console.log(e);
    const { message } = e.response.data;
    dispatch({ type: types.ACTION_FAILED, message });
  }
};
