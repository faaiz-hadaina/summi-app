import * as types from "../../types";
import { Client } from "../../../services/client";

export const addContact = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ACTION_START });

    const response = await Client({
      method: "POST",
      path: "api/",
      data
    });

    dispatch({ type: types.ACTION_SUCCESS });
    dispatch({
      type: types.ADD_CONTACT_SUCCESS,
      payload: "Contact added successfully"
    });
  } catch (e) {
    let { message } = e.response.data;
    if (message.includes("E11000")) {
      message =
        "The name or phone number you entered is already in your phonebook";
    }

    dispatch({ type: types.ACTION_FAILED, message });
  }
};
