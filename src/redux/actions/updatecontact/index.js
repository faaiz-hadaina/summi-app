import * as types from "../../types";
import { Client } from "../../../services/client";

export const updateContact =
  (id, data, navigate) => async (dispatch, getState) => {
    try {
      dispatch({ type: types.ACTION_START });

      const response = await Client({
        method: "PATCH",
        path: `api/${id}`,
        data
      });

      dispatch({ type: types.ACTION_SUCCESS });
      dispatch({
        type: types.UPDATE_CONTACT_SUCCESS,
        payload: "Contact updated successfully"
      });
      navigate("/");
    } catch (e) {
      let { message } = e.response.data;
      if (message.includes("E11000")) {
        message =
          "The name or phone number you entered is already in your phonebook";
      }

      dispatch({ type: types.ACTION_FAILED, message });
    }
  };
