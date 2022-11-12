import * as types from "../../types";
import axios from "axios";
import { Client } from "../../../services/client";
import { searchContact } from "../getcontacts";

export const bulkAdd = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ACTION_START });

    try {
      const res = await axios.post(
        "https://aqueous-cliffs-92016.herokuapp.com/api/upload",
        formData
      );
      dispatch(searchContact(""));
    } catch (ex) {
      console.log(ex);
    }

    // const response = await Client({
    //   method: "POST",
    //   path: "api/upload",
    //   data: formData
    // });

    dispatch({ type: types.ACTION_SUCCESS });
    dispatch({
      type: types.ADD_CONTACT_SUCCESS,
      payload: "Contacts added successfully"
    });
  } catch (e) {
    const { message } = e.response.data;
    dispatch({ type: types.ACTION_FAILED, message });
  }
};
